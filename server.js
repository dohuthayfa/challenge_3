

// server Express 
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});



//F1 collects name, email, and password for account creation.
//F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
//F3 collects credit card #, expiry date, CVV, and billing zip code.
// checkout process




// controlle 
//Account >> ship >> Bill
//F1 collects name, email, and password for account creation.
const models = require('../models/index');

const createAccount = (account, callback) => {
  models.createAccount(account, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('welcome to account');
      callback(null, data);
    }
  });
};
//F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.

const createShip = (ship, callback) => {
  models.createShip(ship, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Shipping is done !' );
      callback(null, data);
    }
  });
};
//F3 collects credit card #, expiry date, CVV, and billing zip code.

const createBill = (card, callback) => {
  models.createBill(card, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(' Billing is done !');
      callback(null, data);
    }
  });
};

module.exports = {
  createAccount,
  createShip,
  createBill
};




app.use(express.static('public')