class Calculator {
  constructor() {}

  sum(a, b) {
    return (parseInt(a) + parseInt(b));
  }
  substract(a, b) {
    return a - b;
  }
  multiple(a, b) {
    return a * b;
  }
  devide(a, b) {
    return a / b;
  }
}

module.exports = Calculator
