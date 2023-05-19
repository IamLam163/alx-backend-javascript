// Create a new file 6-payment_token.test.js and write a test suite named getPaymentTokenFromAPI
//
// How to test the result of getPaymentTokenFromAPI(true)? 
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function() {
  it('should test if getPaymentTokenFromAPI resolves a Promise', function(done) {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch(done); // Call done with error if the promise rejects
  });
});
