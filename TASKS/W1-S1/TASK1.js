// Simple JavaScript Calculator 

const readline = require('readline');

// Setup readline interface for input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask questions and do calculations
rl.question("Enter the first number: ", (input1) => {
    let num1 = parseFloat(input1);

    rl.question("Enter the second number: ", (input2) => {
        let num2 = parseFloat(input2);

        // Using const where values don't change
        const addition = num1 + num2;
        const subtraction = num1 - num2;
        const multiplication = num1 * num2;

        // Use let since values may be conditionally assigned
        let division;
        let modulus;

        // Check for division by zero
        if (num2 !== 0) {
            division = num1 / num2;
            modulus = num1 % num2;
        } else {
            division = "Error: Division by zero";
            modulus = "Error: Division by zero";
        }

        // Display results
        console.log("\n==== Calculator Results ====");
        console.log(`First Number: ${num1}`);
        console.log(`Second Number: ${num2}`);
        console.log(`Addition: ${addition}`);
        console.log(`Subtraction: ${subtraction}`);
        console.log(`Multiplication: ${multiplication}`);
        console.log(`Division: ${division}`);
        console.log(`Modulus: ${modulus}`);
        console.log("============================");

        rl.close();
    });
});
