function sum(values) {
  console.log("nice", values);

  return values.reduce((a, b) => {
  return a + b;
});
}
module.exports = sum;
