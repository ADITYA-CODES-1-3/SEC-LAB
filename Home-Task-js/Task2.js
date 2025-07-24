const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper function to prompt user input
function getInput(promptText) {
  return new Promise((resolve) => {
    rl.question(promptText, (input) => resolve(input));
  });
}

// Main calculator loop
async function calculatorMenu() {
  while (true) {
    console.log(`
===== Menu-Driven Calculator =====
1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit
`);
    let choice = await getInput("Choose an option (1-5): ");

    switch (choice) {
      case '1':
      case '2':
      case '3':
      case '4':
        // Get two numbers with validation
        let num1 = await getInput("Enter first number: ");
        let num2 = await getInput("Enter second number: ");

        if (isNaN(num1) || isNaN(num2)) {
          console.log(" Invalid input. Please enter valid numbers.");
          continue;
        }

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (choice === '1') {
          console.log(` Result: ${num1} + ${num2} = ${num1 + num2}`);
        } else if (choice === '2') {
          console.log(` Result: ${num1} - ${num2} = ${num1 - num2}`);
        } else if (choice === '3') {
          console.log(` Result: ${num1} * ${num2} = ${num1 * num2}`);
        } else if (choice === '4') {
          if (num2 === 0) {
            console.log(" Cannot divide by zero.");
            continue;
          }
          console.log(`Result: ${num1} / ${num2} = ${num1 / num2}`);
        }
        break;

      case '5':
        console.log("Exiting Calculator. Goodbye!");
        rl.close();
        return;

      default:
        console.log(" Invalid choice. Please select between 1 and 5.");
        continue;
    }
  }
}

// Run the calculator
calculatorMenu();
