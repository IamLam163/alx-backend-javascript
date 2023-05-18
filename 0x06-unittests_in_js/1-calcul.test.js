const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  it('should sum to int if type is equal SUM', function() {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6)
  });

  it('should subtract two floating point int if type == SUBTRACT', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
  });

  it('should divide two floating point int if type == DIVIDE', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
  });

  it('ERROR if type == DIVIDE and b == 0', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0), 'Error')
  });

  it('positive number and number rounded up to 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
  });
});
