const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

// This is your test secret API key.
const stripe = require('stripe')('sk_test_51SnYzvRcbl3Y2o46Q26NF3Ws6fokrdVN6ti2OWPxCWOhWOxoPrkDLqjUreM0Op9YYdlaV4SfIV1YVpWBBNP4bgCA004XDtpQxe');

var app = express();

// view engine setup (Handlebars)
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))
app.use(express.json({}));

// https://stripe.com/docs/payments/quickstart - server.js
 
const calculateOrderAmount = (itemId) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  switch (itemId) {
    case '1': return 2300;
    case '2': return 2500;
    case '3': return 2800;
    default: return 1400; 
  }
};

/**
 * Home route
 */
app.get('/', function(req, res) {
  res.render('index');
});

/**
 * Checkout route
 */
app.get('/checkout', function(req, res) {
  const item = req.query.item;
  let title, amount, error;

  switch (item) {
    case '1':
      title = "The Art of Doing Science and Engineering"
      amount = 2300      
      break;
    case '2':
      title = "The Making of Prince of Persia: Journals 1985-1993"
      amount = 2500
      break;      
    case '3':
      title = "Working in Public: The Making and Maintenance of Open Source"
      amount = 2800   
      break;      
    default:
      error = "No item selected"      
      break;
  }

  res.render('checkout', {
    title: title,
    amount: amount,
    error: error
  });
});

// https://stripe.com/docs/payments/quickstart - server.js

app.post('/create-payment-intent', async (req, res) => {
  const { itemId } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(itemId),
    currency: 'usd',
    automatic_payment_methods: { enabled: true },
  });

  res.send({ clientSecret: paymentIntent.client_secret });
});

/**
 * Success route
 */
app.get('/success', function(req, res) {
  res.render('success');
});

/**
 * Start server
 */
app.listen(3000, () => {
  console.log('Getting served on port 3000');
});