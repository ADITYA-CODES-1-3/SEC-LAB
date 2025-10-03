// === Shopping Cart Module ===

// 1️ Product list - Array of objects
let products = [
    { id: 1, name: "Laptop", price: 800, quantity: 1 },
    { id: 2, name: "Mouse", price: 25, quantity: 2 },
    { id: 3, name: "Keyboard", price: 45, quantity: 0 }, // out of stock
    { id: 4, name: "Monitor", price: 200, quantity: 1 },
];

// 2️ filter() - Get only available products (quantity > 0)
const availableProducts = products.filter(product => product.quantity > 0);
console.log(" Available Products:");
console.log(availableProducts);

// 3️ reduce() - Calculate total cart value
const totalValue = availableProducts.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);
console.log("\n Total Cart Value:", totalValue);

// 4️ slice() - View a portion of the products (first 2)
const firstTwoProducts = products.slice(0, 2);
console.log("\n First Two Products:");
console.log(firstTwoProducts);

// 5️ splice() - Remove the 2nd product (index 1) from the cart
let productsCopy = [...products]; // clone to avoid mutation
let removed = productsCopy.splice(1, 1);
console.log("\n Removed Product:", removed);
console.log(" Updated Product List:");
console.log(productsCopy);

// 6️ Spread operator - Clone and update the product list
const updatedProducts = [...products, { id: 5, name: "Headphones", price: 100, quantity: 1 }];
console.log("\n After Adding Headphones:");
console.log(updatedProducts);

// 7️ Product object with method to print details
const productTemplate = {
    id: 0,
    name: "",
    price: 0,
    quantity: 0,
    printDetails: function () {
        console.log(` Product - ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);
    }
};

// Create a new product from template
const newProduct = { ...productTemplate, id: 6, name: "Webcam", price: 70, quantity: 1 };
newProduct.printDetails(); // Call method

// 8️ Destructuring - Extract and display details
const { name, price, quantity } = newProduct;
console.log("\n Destructured Product Info:");
console.log(`Name: ${name}, Price: ${price}, Quantity: ${quantity}`);
