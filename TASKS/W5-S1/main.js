// main.js
import { User } from './user.js';

// 1️ Create user instances
const user1 = new User("Alice", "harshi@example.com");
const user2 = new User("Bob", "invalid-email"); //  Invalid email

// 2️ Log user info
console.log("\n User Profiles:");
console.log(`Name: ${user1.name}, Email: ${user1.email}`);
console.log(`Name: ${user2.name}, Email: ${user2.email}`); // May be undefined if invalid

// 3️ Log activity using prototype method
user1.logActivity("Updated profile");
user1.logActivity("Uploaded a photo");

// 4️ Test static method directly
console.log("\n Email Check (Static):", User.validateEmail("test@gmail.com")); // true
console.log(" Email Check (Static):", User.validateEmail("not-an-email"));     // false
