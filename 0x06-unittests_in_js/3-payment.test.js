const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const expect = require('chai');
const Utils = require('./utils');


describe('sendPaymentRequestToApi', function() {
  it(
    'should calculate the total using Utils.calculateNumber', function() {
      // const testCalculateNumber = sinon.spy(Utils); spies entire Utils obj
      const testCalculateNumber = sinon.spy(Utils, 'calculateNumber'); //spies
      // only the calculateNumber property of the Utils object

      sendPaymentRequestToApi(100, 20);

      sinon.assert.calledOnce(testCalculateNumber);
      sinon.assert.calledWithExactly(testCalculateNumber, 'SUM', 100, 20);

      testCalculateNumber.restore();
    })
})
