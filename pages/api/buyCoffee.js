const stripe = require('stripe')(process.env.STRIPE_SECRET);

const lineItems = [
  {
    price: 'price_1LwLnWHoNzN4jX2ZkO1wYU86',
    adjustable_quantity: {
      enabled: true,
      minimum: 1,
      maximum: 10,
    },
    quantity: 1,
  },
  {
    price: 'price_1LwLoDHoNzN4jX2ZgQgYRKZj',
    adjustable_quantity: {
      enabled: true,
      minimum: 1,
      maximum: 10,
    },
    quantity: 1,
  },
];

export default async (req, res) => {
  res.statusCode = 200;

  const sessionStripe = await stripe.checkout.sessions.create({
    success_url: 'http://localhost:3000/response/success',
    cancel_url: 'http://localhost:3000/',
    payment_method_types: ['blik', 'p24'],
    line_items: [
      {
        price: 'price_1LwLnWHoNzN4jX2ZkO1wYU86',
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
