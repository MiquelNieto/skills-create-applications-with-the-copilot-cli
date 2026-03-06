const { add, subtract, multiply, divide, calculate } = require("../calculator");

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

  test("throws error for invalid operator", () => {
    expect(() => calculate(1, "%", 2)).toThrow('Invalid operator: "%". Use +, -, *, or /');
  });

  test("throws error for empty operator", () => {
    expect(() => calculate(1, "", 2)).toThrow("Invalid operator");
  });

  test("propagates division by zero error", () => {
    expect(() => calculate(10, "/", 0)).toThrow("Cannot divide by zero");
  });
});
