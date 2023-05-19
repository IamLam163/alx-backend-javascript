const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const sumResult = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sumResult}`);
}

sendPaymentRequestToApi(500, 700);

module.exports = sendPaymentRequestToApi;
