const mathOperations = require("./main");

test("a check for sum", () => {
  const a = mathOperations.sum(2, 2);
  expect(a).toBe(4);
});

test("a check for difference", () => {
  const b = mathOperations.diff(4, 2);
  expect(b).toBe(2);
});

test("a check for product", () => {
  const c = mathOperations.product(4, 2);
  expect(c).toBe(8);
});
