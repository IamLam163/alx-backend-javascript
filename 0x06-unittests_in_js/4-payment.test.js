const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const expect = require('chai');
const Utils = require('./utils');
const { beforeEach } = require('mocha');


describe('sendPaymentRequestToApi', function() {
  let testCalculateNumberStub;
  let consoleLogSpy;

  beforeEach(function() {
    testCalculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    testCalculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it(
    'should calculate the total using Utils.calculateNumber stub', function() {
      sendPaymentRequestToApi(100, 20);
      sinon.assert.calledOnce(testCalculateNumberStub);
      sinon.assert.calledWithExactly(testCalculateNumberStub, 'SUM', 100, 20);

    });

  it(
    'should verify that console.log correct message total is: 10', function() {
      sendPaymentRequestToApi(100, 20);
      sinon.assert.calledOnce(consoleLogSpy);
      sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 10');
    });


});
