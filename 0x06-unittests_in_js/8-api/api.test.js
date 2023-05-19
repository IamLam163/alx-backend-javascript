const request = require('request');
const app = require('./api');
const { expect } = require('chai');


describe('API test, must return status of 200', function() {
  const url = 'http://localhost:7865';

  it('GET / and returns 200', function(done) {
    request.get(`${url}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
