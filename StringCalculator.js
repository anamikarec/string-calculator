class StringCalculator {
  static add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      delimiter = numbers.charAt(2);
      numbers = numbers.substring(4);
    }

    let numberArray = numbers.split(delimiter).map((num) => parseInt(num));

    let negatives = numberArray.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(",")}`);
    }

    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
