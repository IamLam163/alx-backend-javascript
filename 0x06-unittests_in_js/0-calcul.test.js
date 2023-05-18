const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should roundup floating point whole numbers to whole number', function() {
    assert.strictEqual(calculateNumber(1.0, 3.0), 4)
  });

  it('should roundown numbers', function() {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3)
  });

  it('should roundup floating point numbers', function() {
    assert.strictEqual(calculateNumber(1.0, 3.7), 5)
  });

  it('should roundown a parameter', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5)
  });

  it('should roundup both parameters', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6)
  });
});
