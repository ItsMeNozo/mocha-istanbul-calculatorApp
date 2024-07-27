class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  factorial(n) {
    if (n < 0) {
      throw new Error("Cannot calculate factorial of a negative number");
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  sqrt(n) {
    if (n < 0) {
      throw new Error("Cannot calculate square root of a negative number");
    }
    return Math.sqrt(n);
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

module.exports = Calculator;
