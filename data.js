const yahooStocks = require('yahoo-stocks');

// const lookup = yahooStocks.lookup('COF').then(response => {
//     console.log(response);
// });

const historical = yahooStocks.history('COF').then(res => {
    console.log(res);
});

module.exports = {
  historical
}
