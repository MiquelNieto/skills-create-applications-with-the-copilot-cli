#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations (basic arithmetic):
 *   + : Addition       – Add two numbers
 *   - : Subtraction    – Subtract the second number from the first
 *   * : Multiplication – Multiply two numbers
 *   / : Division       – Divide the first number by the second (with division-by-zero handling)
 *
 * Usage:
 *   node calculator.js
 *
 * No external dependencies required.
 */

const readline = require("readline");

function createPrompt() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function prompt(question) {
    return new Promise((resolve) => rl.question(question, resolve));
  }

  return { rl, prompt };
}

// Addition: returns the sum of two numbers
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of two numbers
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of two numbers
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of two numbers, handles division by zero
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Modulo: returns the remainder of a divided by b
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a % b;
}

// Power: returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: returns the square root of n, with error handling for negatives
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(n);
}

function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    case "%":
      return modulo(num1, num2);
    case "**":
      return power(num1, num2);
    case "sqrt":
      return squareRoot(num1);
    default:
      throw new Error(`Invalid operator: "${operator}". Use +, -, *, /, %, **, or sqrt`);
  }
}

async function main() {
  const { rl, prompt } = createPrompt();

  console.log("===================================");
  console.log("  Node.js CLI Calculator");
  console.log("  Supports: + (add), - (subtract),");
  console.log("            * (multiply), / (divide),");
  console.log("            % (modulo), ** (power),");
  console.log("            sqrt (square root)");
  console.log("===================================\n");

  let running = true;

  while (running) {
    const num1Input = await prompt("Enter the first number: ");
    const num1 = parseFloat(num1Input);
    if (isNaN(num1)) {
      console.log("Error: Invalid input. Please enter a valid number.\n");
      continue;
    }

    const operator = (await prompt("Enter an operator (+, -, *, /): ")).trim();

    const num2Input = await prompt("Enter the second number: ");
    const num2 = parseFloat(num2Input);
    if (isNaN(num2)) {
      console.log("Error: Invalid input. Please enter a valid number.\n");
      continue;
    }

    try {
      const result = calculate(num1, operator, num2);
      console.log(`\nResult: ${num1} ${operator} ${num2} = ${result}\n`);
    } catch (err) {
      console.log(`\nError: ${err.message}\n`);
    }

    const again = (await prompt("Calculate again? (yes/no): ")).trim().toLowerCase();
    if (again !== "yes" && again !== "y") {
      running = false;
    }
    console.log();
  }

  console.log("Goodbye!");
  rl.close();
}

// Export functions for testing
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate };

// Run the CLI only when executed directly
if (require.main === module) {
  main();
}
