const assert = require('chai').assert

const divide = require('../utils/divide');

describe('divide', function () {
  it('divides 4 by 2 to equal 2', function () {
    assert.equal(divide(4, 2), 2);
  });
  it('divides -4 by 2 to equal -2', function () {
    assert.equal(divide(-4, 2), -2);
  });
});
