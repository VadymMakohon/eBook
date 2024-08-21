const dotenv = require('dotenv');
const express = require('express');
const axios = require('axios');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();
dotenv.config();

// Important!
// For this application to run, you must provide an API_KEY config variable.
// The API_KEY variable can be declared in a .env file kept in the project root.
//
// Relevant Links:
// https://coinmarketcap.com/api/documentation/v1/#section/Authentication
// https://github.com/motdotla/dotenv

app.set('port', process.env.PORT || 3000);

if (process.env.NODE_ENV === 'production') {
  app.use(history());
  app.use(express.static(path.join(__dirname, '/dist')));
}

const baseUrl = 'https://pro-api.coinmarketcap.com/v1/';
const listingsUrl = `${baseUrl}cryptocurrency/listings/latest?limit=100`;
const globalMetricsUrl = `${baseUrl}global-metrics/quotes/latest`;

app.get('/api/coins', (req, res) => {
  axios.get(listingsUrl, {
    headers: { 'X-CMC_PRO_API_KEY': process.env.API_KEY },
  })
    .then((response) => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(response.data);
    })
    .catch((error) => {
      console.log('api call failed :(', error);
    });
});

app.get('/api/market_data', (req, res) => {
  axios.get(globalMetricsUrl, {
    headers: { 'X-CMC_PRO_API_KEY': process.env.API_KEY },
  })
    .then((response) => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(response.data);
    })
    .catch((error) => {
      console.log('api call failed :(', error);
    });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at http://localhost:${app.get('port')}`);
});
