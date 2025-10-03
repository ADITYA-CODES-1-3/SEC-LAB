//  Global task list array (outside function = global scope)
let taskList = [];

// 1 Function to add a single task with a callback
const addTask = function(task, callback) {
    taskList.push(task);
    console.log(` Task added: "${task}"`);
    callback(); // Call the callback function
};

// 2️ Callback function to print all current tasks (arrow function)
const printTasks = () => {
    console.log("\n Current Tasks:");
    if (taskList.length === 0) {
        console.log("No tasks yet.");
    } else {
        taskList.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
    console.log("--------------");
};

// 3 Function to add multiple tasks using rest parameters
function addMultipleTasks(...tasks) {
    console.log(`\n Adding ${tasks.length} tasks...`);
    
    // Local scope variable
    let addedCount = 0;

    tasks.forEach(task => {
        taskList.push(task);
        addedCount++;
    });

    console.log(` ${addedCount} tasks added.`);
    printTasks(); // Reuse the callback to show updated list
}

// 4️  Demonstrate variable scopes
const globalMessage = " I am a global variable.";

function showScopes() {
    const localMessage = " I am a local variable inside showScopes().";

    console.log("\n Variable Scope Demo:");
    console.log(globalMessage);   // Accessible here
    console.log(localMessage);    // Local scope
    
}

//  Demonstration (running the functions)

// Add one task and print using callback
addTask("Buy groceries", printTasks);

// Add multiple tasks
addMultipleTasks("Do laundry", "Finish assignment", "Call friend");

// Variable scope demo
showScopes();
