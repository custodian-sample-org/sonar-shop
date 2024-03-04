function sum(values) {
  console.log("nice", values);

  return values.reduce(function (a, b) {
    return a + b;
  });
}
module.exports = sum;
