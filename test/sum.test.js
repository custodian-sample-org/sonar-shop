const assert = require('chai').assert

const sum = require('../utils/sum');

describe('sum', () => {
  it('should work for positive numbers', () => {
    assert.equal(sum(1, 2), 3, '1 plus 2 is 3');
  }).timeout(1000);
});
