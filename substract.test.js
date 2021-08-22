const Calculator = require("./Calculator");

test("substract two number", () => {
  const calc = new Calculator();
  expect(calc.substract(9, 4)).toBe(5);
});