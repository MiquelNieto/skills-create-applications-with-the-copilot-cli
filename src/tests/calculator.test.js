const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require("../calculator");

// =============================================
// Addition tests
// =============================================
describe("add", () => {
  test("2 + 3 = 5 (image example)", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds two positive numbers", () => {
    expect(add(10, 20)).toBe(30);
  });

  test("adds a positive and a negative number", () => {
    expect(add(5, -3)).toBe(2);
  });

  test("adds two negative numbers", () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test("adds zero to a number", () => {
    expect(add(7, 0)).toBe(7);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });

  test("adds large numbers", () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });
});

// =============================================
// Subtraction tests
// =============================================
describe("subtract", () => {
  test("10 - 4 = 6 (image example)", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts two positive numbers", () => {
    expect(subtract(20, 5)).toBe(15);
  });

  test("subtracts a larger number from a smaller one (negative result)", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test("subtracts a negative number (effectively adds)", () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test("subtracts two negative numbers", () => {
    expect(subtract(-4, -6)).toBe(2);
  });

  test("subtracts zero", () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// =============================================
// Multiplication tests
// =============================================
describe("multiply", () => {
  test("45 * 2 = 90 (image example)", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies two positive numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("multiplies by zero", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(4, -3)).toBe(-12);
  });

  test("multiplies two negative numbers", () => {
    expect(multiply(-5, -5)).toBe(25);
  });

  test("multiplies by one (identity)", () => {
    expect(multiply(42, 1)).toBe(42);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10);
  });
});

// =============================================
// Division tests
// =============================================
describe("divide", () => {
  test("20 / 5 = 4 (image example)", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides two positive numbers", () => {
    expect(divide(100, 4)).toBe(25);
  });

  test("divides with a decimal result", () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test("divides a negative by a positive", () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test("divides two negative numbers", () => {
    expect(divide(-20, -4)).toBe(5);
  });

  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("divides by one (identity)", () => {
    expect(divide(99, 1)).toBe(99);
  });

  test("throws error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });

  test("throws error when dividing zero by zero", () => {
    expect(() => divide(0, 0)).toThrow("Cannot divide by zero");
  });

  test("throws error when dividing negative number by zero", () => {
    expect(() => divide(-5, 0)).toThrow("Cannot divide by zero");
  });
});

// =============================================
// calculate() dispatcher tests
// =============================================
describe("calculate", () => {
  test("dispatches addition with +", () => {
    expect(calculate(2, "+", 3)).toBe(5);
  });

  test("dispatches subtraction with -", () => {
    expect(calculate(10, "-", 4)).toBe(6);
  });

  test("dispatches multiplication with *", () => {
    expect(calculate(45, "*", 2)).toBe(90);
  });

  test("dispatches division with /", () => {
    expect(calculate(20, "/", 5)).toBe(4);
  });

  test("dispatches modulo with %", () => {
    expect(calculate(5, "%", 2)).toBe(1);
  });

  test("dispatches power with **", () => {
    expect(calculate(2, "**", 3)).toBe(8);
  });

  test("dispatches square root with sqrt", () => {
    expect(calculate(16, "sqrt", 0)).toBe(4);
  });

  test("throws error for invalid operator", () => {
    expect(() => calculate(1, "^", 2)).toThrow(/Invalid operator/);
  });

  test("throws error for empty operator", () => {
    expect(() => calculate(1, "", 2)).toThrow("Invalid operator");
  });

  test("propagates division by zero error", () => {
    expect(() => calculate(10, "/", 0)).toThrow("Cannot divide by zero");
  });
});

// =============================================
// Modulo tests (image example: 5 % 2)
// =============================================
describe("modulo", () => {
  test("5 % 2 = 1 (image example)", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("returns remainder of two positive numbers", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("returns zero when evenly divisible", () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test("handles modulo with negative dividend", () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test("handles modulo with negative divisor", () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test("handles modulo with decimal numbers", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  test("handles zero as dividend", () => {
    expect(modulo(0, 5)).toBe(0);
  });

  test("throws error when divisor is zero", () => {
    expect(() => modulo(10, 0)).toThrow("Cannot divide by zero");
  });

  test("throws error when both are zero", () => {
    expect(() => modulo(0, 0)).toThrow("Cannot divide by zero");
  });
});

// =============================================
// Power / Exponentiation tests (image example: 2 ^ 3)
// =============================================
describe("power", () => {
  test("2 ^ 3 = 8 (image example)", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("raises a number to the power of 2", () => {
    expect(power(5, 2)).toBe(25);
  });

  test("any number to the power of 0 is 1", () => {
    expect(power(99, 0)).toBe(1);
  });

  test("any number to the power of 1 is itself", () => {
    expect(power(7, 1)).toBe(7);
  });

  test("handles negative exponent", () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test("handles negative base with even exponent", () => {
    expect(power(-3, 2)).toBe(9);
  });

  test("handles negative base with odd exponent", () => {
    expect(power(-3, 3)).toBe(-27);
  });

  test("handles zero base", () => {
    expect(power(0, 5)).toBe(0);
  });

  test("handles decimal exponent", () => {
    expect(power(4, 0.5)).toBeCloseTo(2);
  });

  test("handles large exponent", () => {
    expect(power(2, 10)).toBe(1024);
  });
});

// =============================================
// Square Root tests (image example: √16)
// =============================================
describe("squareRoot", () => {
  test("√16 = 4 (image example)", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("returns square root of a perfect square", () => {
    expect(squareRoot(25)).toBe(5);
  });

  test("returns square root of a non-perfect square", () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142);
  });

  test("square root of 0 is 0", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("square root of 1 is 1", () => {
    expect(squareRoot(1)).toBe(1);
  });

  test("handles large numbers", () => {
    expect(squareRoot(1000000)).toBe(1000);
  });

  test("handles decimal input", () => {
    expect(squareRoot(2.25)).toBeCloseTo(1.5);
  });

  test("throws error for negative number", () => {
    expect(() => squareRoot(-4)).toThrow("Cannot calculate square root of a negative number");
  });

  test("throws error for negative decimal", () => {
    expect(() => squareRoot(-0.5)).toThrow("Cannot calculate square root of a negative number");
  });
});
