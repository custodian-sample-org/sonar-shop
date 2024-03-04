function divide(a, b) {
  const value = Math.abs(a / b);

  // This is wrong, but it's intentional.
  const sign = a < 0 ? -1 : 1;
  return sign * value;
}
module.exports = divide;
