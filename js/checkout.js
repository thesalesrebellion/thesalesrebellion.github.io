const stripe = Stripe("pk_live_76o7Q17lfv1eFl5I74ajlWi5003dMoTD0q");
const elements = stripe.elements();
let checkout = '';

document.querySelectorAll('button[data-type="purchase"]').forEach(i => i.addEventListener('click', async e => {
  const price = e.target.getAttribute('data-product-price');
  checkout = await createCheckoutSession(price);

  // Set product name.
  document.querySelector('.item-title').innerHTML = checkout.session().lineItems[0].name;

  // Handle submit.
  document.querySelector('#payment-form')
    .addEventListener('submit', handleSubmit);

  // Validate input.
  validateInput();

  // Create payment element.
  createPaymentElement(checkout);
}));

const validateEmail = async (email) => {
  const updateResult = await checkout.updateEmail(email);
  const isValid = updateResult.type !== "error";

  return { isValid, message: !isValid ? updateResult.error.message : null };
};

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  trailingZeroDisplay: 'stripIfInteger' 
});

// Fetches a Checkout Session and captures the client secret
const createCheckoutSession = async (price) => {
  const clientSecret = fetch('/api/stripe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price }),
    })
    .then(r => r.json())
    .then(r => r.clientSecret);

  return stripe.initCheckout({
    fetchClientSecret: () => clientSecret,
    elementsOptions: { appearance: { theme: 'stripe' }},
  });
};

const validateInput = () => {
  const emailInput = document.getElementById('email');
  const emailErrors = document.getElementById('email-errors');

  // Clear any validation errors.
  emailInput.addEventListener('input', () => emailErrors.textContent = '');

  emailInput.addEventListener('blur', async () => {
    const newEmail = emailInput.value;
    if (!newEmail) {
      return;
    }

    const { isValid, message } = await validateEmail(newEmail);
    if (!isValid) {
      emailErrors.textContent = message;
    }
  });
};

const createPaymentElement = (checkout) => {
  // Get values and create payment element.
  const full = formatter.format(checkout.session().total.total.minorUnitsAmount / 100);
  const split = formatter.format(checkout.session().total.total.minorUnitsAmount / 4 / 100);
  const buttonText = document.querySelector('#submit span');
  const buttonTextAmounts = {
    card: `Pay ${full} now`,
    klarna: `Set up 4 payments of ${split} now`,
  };

  const paymentElement = checkout.createPaymentElement({
    paymentMethodOrder: ['klarna', 'card'],
    layout: 'tabs',
  });
  paymentElement.update({ defaultValues: { paymentMethod: 'klarna' } });
  paymentElement.mount('#payment-element');
  paymentElement.on('change', e => buttonText.textContent = buttonTextAmounts[e.value.type]);
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const email = document.getElementById('email').value;
  const { isValid, message } = await validateEmail(email);
  if (!isValid) {
    showMessage(message);
    setLoading(false);
    return;
  }

  const { error } = await checkout.confirm();

  // This point will only be reached if there is an immediate error when
  // confirming the payment. Otherwise, your customer will be redirected to
  // your `return_url`. For some payment methods like iDEAL, your customer will
  // be redirected to an intermediate site first to authorize the payment, then
  // redirected to the `return_url`.
  showMessage(error.message);

  setLoading(false);
};

const showMessage = (messageText) => {
  const messageContainer = document.querySelector('#payment-message');

  messageContainer.classList.remove('hidden');
  messageContainer.textContent = messageText;

  setTimeout(function () {
    messageContainer.classList.add('hidden');
    messageContainer.textContent = '';
  }, 4000);
};

// Show a spinner on payment submission
const setLoading = (isLoading) => {
  if (isLoading) {
    // Disable the button and show a spinner.
    document.querySelector('#submit').disabled = true;
    document.querySelector('#spinner').classList.remove('hidden');
    document.querySelector('#button-text').classList.add('hidden');
  } else {
    document.querySelector('#submit').disabled = false;
    document.querySelector('#spinner').classList.add('hidden');
    document.querySelector('#button-text').classList.remove('hidden');
  }
};
