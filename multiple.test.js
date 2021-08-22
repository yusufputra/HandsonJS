const Calculator = require("./Calculator");

test("multiply two number", () => {
  const calc = new Calculator();
  expect(calc.multiple(9, 4)).toBe(36);
});