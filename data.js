const app = require('express')();
const yahooStocks = require('yahoo-stocks');

app.get('/lookup', (req, res, next) => {
  yahooStocks.lookup('COF')
  .then(data => {
    console.log(data);
    res.send(data)
  })
  .catch(next);
})

app.get('/historical', (req, res, next) => {
  yahooStocks.history('COF')
  .then(data => {
    console.log(data);
    res.json(data)
  })
  .catch(next);
})

module.exports = app;
