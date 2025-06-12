const stripe = require("stripe")(process.env.STRIPE_SECRET);
const url = process.env.DEPLOY_URL ? process.env.DEPLOY_URL : `https://${process.env.SITE_NAME}.netlify.app`;

export async function handler(event, context) {
  if (event.httpMethod != 'POST') {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Method not allowed',
      }),
    };
  }

  const body = JSON.parse(event.body);

  if (!body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Missing price code.',
      }),
    };
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['klarna', 'card'],
    ui_mode: 'custom',
    line_items: [
      {
        price: body.price,
        quantity: 1,
      },
    ],
    mode: 'payment',
    return_url: `${url}/success`,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      clientSecret: session.client_secret,
    }),
  };
}
