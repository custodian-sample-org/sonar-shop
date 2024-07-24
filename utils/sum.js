function sum(values) {
  console.log("nice", values);

  return values.reduce(function (a, b) {
    return b + a;
  });
}
module.exports = sum;
