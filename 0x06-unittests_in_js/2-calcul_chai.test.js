const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');


describe('calculateNumber', function() {
  it('should sum to int if type is equal SUM', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should subtract two floating point int if type == SUBTRACT', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4)
  });

  it('should divide two floating point int if type == DIVIDE', function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2)
  });

  it('ERROR if type == DIVIDE and b == 0', function() {
    expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error')
  });

  it('positive number and number rounded up to 0', () => {
    expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
  });
});
