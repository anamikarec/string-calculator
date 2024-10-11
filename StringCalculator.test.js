const StringCalculator = require("./StringCalculator");

test("should return 0 for empty string", function () {
  expect(StringCalculator.add("")).toBe(0);
});
