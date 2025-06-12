const stripe = Stripe("pk_test_hOI2vzQX7QTuREiUkLmwqI1c00Rzh33WFH");
const elements = stripe.elements();

let checkout;
initialize();

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

document
  .querySelector("#payment-form")
  .addEventListener("submit", handleSubmit);

// Fetches a Checkout Session and captures the client secret
async function initialize() {
  const price = 'price_1RZF6EIa1dfERqdGEP4ZN9xz';
  const promise = fetch('/api/stripe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ price }),
  })
    .then(r => r.json())
    .then(r => r.clientSecret);

  const appearance = {
    theme: 'stripe',
  };
  checkout = await stripe.initCheckout({
    fetchClientSecret: () => promise,
    elementsOptions: { appearance },
  });

  // Set product name.
  document.querySelector('.item-title').innerHTML = checkout.session().lineItems[0].name;

  const emailInput = document.getElementById("email");
  const emailErrors = document.getElementById("email-errors");

  // Clear any validation errors
  emailInput.addEventListener("input", () => emailErrors.textContent = '');

  emailInput.addEventListener("blur", async () => {
    const newEmail = emailInput.value;
    if (!newEmail) {
      return;
    }

    const { isValid, message } = await validateEmail(newEmail);
    if (!isValid) {
      emailErrors.textContent = message;
    }
  });

  // Get values and create payment element.
  const full = formatter.format(checkout.session().total.total.minorUnitsAmount / 100);
  const split = formatter.format(checkout.session().total.total.minorUnitsAmount / 4 / 100);
  const buttonText = document.querySelector("#submit");
  const buttonTextAmounts = {
    card: `Pay ${full} now`,
    klarna: `Set up 4 payments of ${split} now`,
  };

  const paymentElement = checkout.createPaymentElement({
    paymentMethodOrder: ['klarna', 'card'],
    layout: 'tabs',
  });
  paymentElement.update({ defaultValues: { paymentMethod: 'klarna' } });
  paymentElement.mount("#payment-element");
  paymentElement.on('change', e => buttonText.textContent = buttonTextAmounts[e.value.type]);
}

async function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);

  const email = document.getElementById("email").value;
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
}

// ------- UI helpers -------

function showMessage(messageText) {
  const messageContainer = document.querySelector("#payment-message");

  messageContainer.classList.remove("hidden");
  messageContainer.textContent = messageText;

  setTimeout(function () {
    messageContainer.classList.add("hidden");
    messageContainer.textContent = "";
  }, 4000);
}

// Show a spinner on payment submission
function setLoading(isLoading) {
  if (isLoading) {
    // Disable the button and show a spinner
    document.querySelector("#submit").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("#submit").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
}
