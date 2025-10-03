// === 📇 Contact Management Module ===

// 1️ Array of contact objects
let contacts = [
    {
        name: "ADITYA",
        phone: "6365464466",
        email: "aditya@gmail.com",
        displayInfo: function () {
            const { name, phone, email } = this; // Destructuring inside method
            console.log(`👤 ${name} | 📞 ${phone} | 📧 ${email}`);
        }
    },
    {
        name: "Harshitha",
        phone: "9514634856",
        email: "harshi@gmail.com",
        displayInfo: function () {
            const { name, phone, email } = this;
            console.log(`👤 ${name} | 📞 ${phone} | 📧 ${email}`);
        }
    }
];

// 2️ Access properties using dot and bracket notation
console.log("\n📌 Access Properties:");
console.log("Using dot:", contacts[0].name);
console.log("Using bracket:", contacts[1]["email"]);

// 3️ Iterate through array and print all contacts
console.log("\n📇 All Contacts:");
contacts.forEach(contact => contact.displayInfo());

// 4️ Function to add multiple contacts using rest parameters
function addContacts(...newContacts) {
    contacts.push(...newContacts); // Spread operator to merge
    console.log(`\n✅ ${newContacts.length} new contact(s) added.`);
}

// Adding more contacts
addContacts(
    {
        name: "Kavi",
        phone: "89625646554",
        email: "kavi@gmail.com",
        displayInfo: function () {
            const { name, phone, email } = this;
            console.log(`👤 ${name} | 📞 ${phone} | 📧 ${email}`);
        }
    },
    {
        name: "abhi",
        phone: "896465646",
        email: "abhishek@gmail.com",
        displayInfo: function () {
            const { name, phone, email } = this;
            console.log(`👤 ${name} | 📞 ${phone} | 📧 ${email}`);
        }
    }
);

// 5️ Print all contacts again
console.log("\n Updated Contact List:");
contacts.forEach(contact => contact.displayInfo());

// 6️ Merge contact arrays using spread operator
const externalContacts = [
    {
        name: "ajay",
        phone: "861665454",
        email: "ajay@gmail.com",
        displayInfo: function () {
            const { name, phone, email } = this;
            console.log(`👤 ${name} | 📞 ${phone} | 📧 ${email}`);
        }
    }
];

const mergedContacts = [...contacts, ...externalContacts];
console.log("\n Merged Contact List:");
mergedContacts.forEach(contact => contact.displayInfo());

// 7️ Demonstrate call(), apply(), bind()

console.log("\n Method Borrowing Gmail:");

// Object without display method
const tempContact = {
    name: "faiz",
    phone: "000-111-2222",
    email: "faiz@gmail.com"
};

// Borrow displayInfo from an existing contact
contacts[0].displayInfo.call(tempContact);   // using call()
contacts[0].displayInfo.apply(tempContact); // using apply()

const boundDisplay = contacts[0].displayInfo.bind(tempContact);
boundDisplay(); // using bind()

