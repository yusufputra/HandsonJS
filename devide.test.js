const Calculator = require("./Calculator");

test("devide two number", () => {
  const calc = new Calculator();
  expect(calc.devide(12, 4)).toBe(3);
});