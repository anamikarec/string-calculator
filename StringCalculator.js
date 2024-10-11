class StringCalculator {
  static add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      delimiter = numbers.charAt(2);
      numbers = numbers.substring(4);
    }

    let numberArray = numbers.split(delimiter).map((num) => parseInt(num));
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
