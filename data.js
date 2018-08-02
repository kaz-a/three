const app = require('express')();
const yahooStocks = require('yahoo-stocks');

const symbols = ['AAPL', 'COF', 'MSFT', 'C', 'Z', 'FIT', 'GS', 'GM', 'TSLA', 'EBAY', 'FB'];

app.get('/lookup', (req, res, next) => {
  let lookups = [];
  symbols.forEach(symbol => {
    lookups.push(yahooStocks.lookup(symbol))
  })
  Promise.all(lookups)
  .then(data => {
    console.log(data);
    res.send(data)
  })
  .catch(next);
})

// app.get('/historical', (req, res, next) => {
//   let histories = [];
//   symbols.forEach(symbol => {
//     histories.push(yahooStocks.history(symbol))
//   })
//   Promise.all(histories)
//   .then(data => {
//     console.log(data);
//     res.json(data)
//   })
//   .catch(next);
// })

module.exports = app;
