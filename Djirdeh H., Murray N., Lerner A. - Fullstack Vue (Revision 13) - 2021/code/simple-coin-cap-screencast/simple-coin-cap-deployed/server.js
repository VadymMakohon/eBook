const express = require('express');
const axios = require('axios');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

app.set('port', process.env.PORT || 3000);

if (process.env.NODE_ENV === 'production') {
  app.use(history());
  app.use(express.static(path.join(__dirname, '/dist')));
}

app.get('/api/coins', function(req, res) {
  axios.get('https://api.coinmarketcap.com/v2/ticker/?limit=100')
    .then(function(response) {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(response.data);
    })
    .catch(function(error) {
      console.log('api call failed :(', error)
    })
});

app.get('/api/market_data', function(req, res) {
  axios.get('https://api.coinmarketcap.com/v2/global')
    .then(function(response) {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(response.data);
    })
    .catch(function(error) {
      console.log('api call failed :(', error)
    })
});

app.listen(app.get('port'), function() {
  console.log('Find the server at http://localhost:' + app.get('port'));
});
