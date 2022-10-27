const stripe = require('stripe')(process.env.STRIPE_SECRET);

export default async (req, res) => {
  res.statusCode = 200;

  const sessionStripe = await stripe.checkout.sessions.create({
    success_url: 'http://urlopaktywnie.pl/response/success',
    cancel_url: 'http://urlopaktywnie.pl/response/cancel',
    payment_method_types: ['blik', 'p24'],
    line_items: [
      {
        price: 'price_1LwKqyHoNzN4jX2ZlmAZjU7f',
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
          maximum: 10,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
  });

  res.json(sessionStripe);
};
