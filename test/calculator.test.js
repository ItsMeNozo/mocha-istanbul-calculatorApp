const assert = require("assert");
const Calculator = require("../src/calculator"); // Adjust the path if necessary

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("add", () => {
    it("should add two numbers correctly", () => {
      assert.strictEqual(calculator.add(1, 2), 3);
      assert.strictEqual(calculator.add(-1, -1), -2);
      assert.strictEqual(calculator.add(-1, 1), 0);
    });
  });

  describe("subtract", () => {
    it("should subtract two numbers correctly", () => {
      assert.strictEqual(calculator.subtract(2, 1), 1);
      assert.strictEqual(calculator.subtract(-1, -1), 0);
      assert.strictEqual(calculator.subtract(1, -1), 2);
    });
  });

  describe("multiply", () => {
    it("should multiply two numbers correctly", () => {
      assert.strictEqual(calculator.multiply(2, 3), 6);
      assert.strictEqual(calculator.multiply(-1, 2), -2);
      assert.strictEqual(calculator.multiply(-2, -2), 4);
    });
  });

  describe("divide", () => {
    it("should divide two numbers correctly", () => {
      assert.strictEqual(calculator.divide(6, 3), 2);
      assert.strictEqual(calculator.divide(-6, 2), -3);
      assert.strictEqual(calculator.divide(-6, -2), 3);
    });

    it("should throw an error when dividing by zero", () => {
      assert.throws(() => calculator.divide(1, 0), /Cannot divide by zero/);
    });
  });

  describe("power", () => {
    it("should calculate the power of a number correctly", () => {
      assert.strictEqual(calculator.power(2, 3), 8);
      assert.strictEqual(calculator.power(5, 0), 1);
      assert.strictEqual(calculator.power(-2, 2), 4);
    });
  });

  describe("factorial", () => {
    it("should calculate the factorial of a number correctly", () => {
      assert.strictEqual(calculator.factorial(5), 120);
      assert.strictEqual(calculator.factorial(0), 1);
      assert.strictEqual(calculator.factorial(1), 1);
    });

    it("should throw an error when calculating factorial of a negative number", () => {
      assert.throws(() => calculator.factorial(-1), /Cannot calculate factorial of a negative number/);
    });
  });

  describe("sqrt", () => {
    it("should calculate the square root of a number correctly", () => {
      assert.strictEqual(calculator.sqrt(4), 2);
      assert.strictEqual(calculator.sqrt(0), 0);
      assert.strictEqual(calculator.sqrt(1), 1);
    });

    it("should throw an error when calculating square root of a negative number", () => {
      assert.throws(() => calculator.sqrt(-1), /Cannot calculate square root of a negative number/);
    });
  });
});
