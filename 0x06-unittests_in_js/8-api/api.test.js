const request = require('request');
const { expect } = require('cha');


describe('API test, must return status of 200', function() {
  const url = 'http://localhost:7865';

  it('GET / and returns 200', function(done) {
    request.get(`${url}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
