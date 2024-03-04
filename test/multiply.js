const assert = require('chai').assert

const multiply = require('../utils/multiply');

describe('multiply', function () {
  it('should work for positive numbers', function () {
    assert.equal(multiply(3, 2), 6, '3 times 2 is 6');
  });
  it('should work for odd numbers', function () {
    const val = 11;

    assert.equal(multiply(2, val), 22, '2 times 11 is 22');
  });
});
