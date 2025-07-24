const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the first number: ", (input1) => {
  var num1 = parseFloat(input1); // using var

  rl.question("Enter the second number: ", (input2) => {
    let num2 = parseFloat(input2); // using let
    const operatorList = ['+', '-', '*', '/', '%']; // using const

    console.log("\n------ Simple Calculator Results ------");
    console.log("Number 1:", num1);
    console.log("Number 2:", num2);

    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = (num2 !== 0) ? (num1 / num2) : "Error: Division by zero!";
    let modulus = (num2 !== 0) ? (num1 % num2) : "Error: Modulus by zero!";

    console.log("Addition (+):", addition);
    console.log("Subtraction (-):", subtraction);
    console.log("Multiplication (*):", multiplication);
    console.log("Division (/):", division);
    console.log("Modulus (%):", modulus);

    rl.close();
  });
});
