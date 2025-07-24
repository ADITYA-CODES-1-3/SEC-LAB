// Global task list array
let taskList = [];

// 1) Function to add a single task and run a callback
function addTask(task, callback) {
  taskList.push(task);
  console.log(` Task added: "${task}"`);
  callback(); // print tasks
}

// 2) Callback function to print current tasks
const printTasks = () => {
  console.log("\n📋 Current Task List:");
  taskList.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
  console.log("----------------------------------\n");
};

// 3) Arrow function to add multiple tasks using rest parameters
const addMultipleTasks = (...tasks) => {
  tasks.forEach(task => taskList.push(task));
  console.log(` Added ${tasks.length} tasks.`);
  printTasks();
};

// 4) Variable Scope 
let globalMessage = "I'm a global variable";

function scopeTest() {
  let localMessage = " I'm a local variable";
  console.log(globalMessage);   
  console.log(localMessage);    
}

console.log("\n=== Task Manager Demo ===");

// Add single task
addTask("Complete JavaScript Assignment", printTasks);

// Add more tasks using arbitrary arguments
addMultipleTasks(
  "Review Pull Requests",
  "Refactor Backend API",
  "Update README",
  "Deploy to Production"
);

// Scope check
scopeTest();

