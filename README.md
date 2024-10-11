# String Calculator - TDD Kata

This project implements a **String Calculator** following the principles of **Test-Driven Development (TDD)**.

## Technologies

- **JavaScript (Node.js)**: Core language used for implementation.
- **Jest**: Testing framework for writing and executing unit tests.

## Project Structure

```
string-calculator/
├── package.json            # Project dependencies
├── StringCalculator.js     # StringCalculator class implementation
├── StringCalculator.test.js# Jest unit tests for StringCalculator
└── README.md               # Project documentation (this file)
```

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/anamikarec/string-calculator.git
   cd string-calculator
   ```

2. **Install dependencies**:

   Make sure you have Node.js installed. Install the required dependencies by running:

   ```bash
   npm install
   ```

## Running the Tests

```bash
npx jest
```

Jest will run all the test cases in the `StringCalculator.test.js` file and provide the results, indicating whether each test passed or failed.

### Example of running the tests:

```bash
 PASS  ./StringCalculator.test.js
  ✓ should return 0 for an empty string (2 ms)
  ✓ should return the number itself if one number is provided
  ✓ should return the sum of two numbers (1 ms)
  ✓ should return the sum for an unknown amount of numbers (1 ms)
  ✓ should handle new lines between numbers
  ✓ should support different delimiters (1 ms)
  ✓ should throw an exception for negative numbers
```
