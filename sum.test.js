const Calculator = require("./Calculator");

test("add two number", () => {
  const calc = new Calculator();
  expect(calc.sum(2, 4)).toBe(6);
});
