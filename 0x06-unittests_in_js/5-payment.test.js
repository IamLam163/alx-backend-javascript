const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const expect = require('chai');
const Utils = require('./utils');
const { beforeEach } = require('mocha');


describe('sendPaymentRequestToApi', function() {
  let consoleLogSpy;

  beforeEach(function() {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    consoleLogSpy.restore();
  });

  it(
    'should verify that console logs correct message total is: 120', function() {
      sendPaymentRequestToApi(100, 20);
      sinon.assert.calledOnce(consoleLogSpy);
      sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');
    });

  it(
    'should verify that console logs correct message total is: 20', function() {
      sendPaymentRequestToApi(10, 10);
      sinon.assert.calledOnce(consoleLogSpy);
      sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 20');
    });


});
