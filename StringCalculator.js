class StringCalculator {
  static add(numbers) {
    // return 0 in case of empty string
    if (numbers === "") return 0;

    // split the input string into an array of numbers
    const numberArray = numbers
      .replace(/\n/g, ",")
      .split(",")
      .map((num) => parseInt(num));
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
