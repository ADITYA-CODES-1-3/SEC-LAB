
// User Session Tracker


// Set to store unique active user IDs
const activeUserIDs = new Set();

// WeakMap to associate user objects with metadata (e.g., last activity)
const userMetadata = new WeakMap();

// User constructor (for simulation)
function createUser(id, name) {
  return { id, name };
}

// Add a user to session
function addUser(user) {
  activeUserIDs.add(user.id);
  userMetadata.set(user, {
    lastActive: new Date(),
    device: "desktop",
  });
  console.log(`User added: ${user.name} (ID: ${user.id})`);
}

// Remove a user from session
function removeUser(user) {
  activeUserIDs.delete(user.id);
  userMetadata.delete(user);
  console.log(`User removed: ${user.name} (ID: ${user.id})`);
}

// Update user's last active timestamp
function updateUserActivity(user) {
  if (userMetadata.has(user)) {
    const meta = userMetadata.get(user);
    meta.lastActive = new Date();
    console.log(`Updated activity for ${user.name}`);
  } else {
    console.log(`User metadata not found for ${user.name}`);
  }
}

// Cleanup inactive users based on a threshold (in minutes)
function cleanInactiveUsers(thresholdMinutes = 30) {
  const now = new Date();
  for (const userId of activeUserIDs) {
    // Since we can't iterate WeakMap directly, we simulate a user object
    // and check for metadata (inefficient in real apps, just for demo)
    for (const user of simulatedUsers) {
      if (user.id === userId && userMetadata.has(user)) {
        const meta = userMetadata.get(user);
        const diffMinutes = (now - meta.lastActive) / 60000;
        if (diffMinutes > thresholdMinutes) {
          removeUser(user);
        }
      }
    }
  }
}

// Simulated list of user objects to demonstrate memory cleanup
let simulatedUsers = [];

// --- DEMO ---

console.log("\n=== Session Tracker Demo ===\n");

// Add users
let user1 = createUser(1, "Alice");
let user2 = createUser(2, "Bob");
let user3 = createUser(3, "Charlie");

simulatedUsers.push(user1, user2, user3);

addUser(user1);
addUser(user2);
addUser(user3);

// Update activity
setTimeout(() => {
  updateUserActivity(user1);
}, 1000);

// Simulate cleanup after 2 seconds
setTimeout(() => {
  console.log("\nCleaning up inactive users (threshold = 0.01 min)...");
  cleanInactiveUsers(0.01); // force cleanup for demo
}, 2000);

// Simulate user object being garbage collected
setTimeout(() => {
  console.log("\nSimulating user object removal (no references)...");

  // Remove user3 from simulatedUsers, then set to null
  simulatedUsers = simulatedUsers.filter(u => u.id !== 3);
  user3 = null; // Now only WeakMap has reference

  global.gc?.(); // If Node was started with --expose-gc

  setTimeout(() => {
    console.log("\nAttempting to update removed user's metadata (should fail)...");
    try {
      updateUserActivity(user3);
    } catch (e) {
      console.log("User3 is no longer accessible (likely garbage collected)");
    }
  }, 1000);
}, 4000);
