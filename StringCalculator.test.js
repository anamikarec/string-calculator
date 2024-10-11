const StringCalculator = require("./StringCalculator");

test("should return 0 for empty string", () => {
  expect(StringCalculator.add("")).toBe(0);
});

test("should return the number itself if one number is provided", () => {
  expect(StringCalculator.add("1")).toBe(1);
  expect(StringCalculator.add("2")).toBe(2);
});

test("should return the sum of two numbers", () => {
  expect(StringCalculator.add("1,2")).toBe(3);
  expect(StringCalculator.add("5,7")).toBe(12);
});

test("should return the sum for an unknown amount of numbers", () => {
  expect(StringCalculator.add("1,2,3")).toBe(6);
  expect(StringCalculator.add("4,5,6,7")).toBe(22);
});

test("should handle new lines between numbers", () => {
  expect(StringCalculator.add("1\n2,3")).toBe(6);
});
