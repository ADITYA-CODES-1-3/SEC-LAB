const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to get user input as a Promise
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, answer => resolve(answer)));
}

// Main async function for calculator
async function calculator() {
    let choice;

    do {
        console.log("\n===== Calculator Menu =====");
        console.log("1. Add");
        console.log("2. Subtract");
        console.log("3. Multiply");
        console.log("4. Divide");
        console.log("5. Exit");

        choice = await askQuestion("Choose an option (1-5): ");

        switch (choice) {
            case "1":
            case "2":
            case "3":
            case "4":
                // Ask for two numbers
                let input1 = await askQuestion("Enter the first number: ");
                let input2 = await askQuestion("Enter the second number: ");

                let num1 = parseFloat(input1);
                let num2 = parseFloat(input2);

                // Input validation
                if (isNaN(num1) || isNaN(num2)) {
                    console.log(" Invalid number input. Please try again.");
                    continue; // Go back to menu
                }

                // Perform selected operation
                switch (choice) {
                    case "1":
                        console.log(` Result: ${num1} + ${num2} = ${num1 + num2}`);
                        break;
                    case "2":
                        console.log(` Result: ${num1} - ${num2} = ${num1 - num2}`);
                        break;
                    case "3":
                        console.log(` Result: ${num1} * ${num2} = ${num1 * num2}`);
                        break;
                    case "4":
                        if (num2 === 0) {
                            console.log(" Error: Division by zero is not allowed.");
                            continue;
                        }
                        console.log(` Result: ${num1} / ${num2} = ${num1 / num2}`);
                        break;
                }
                break;

            case "5":
                console.log(" Exiting calculator. Goodbye!");
                break;

            default:
                console.log(" Invalid choice. Please select from 1 to 5.");
                continue;
        }
    } while (choice !== "5");

    rl.close();
}

// Run the calculator
calculator();
