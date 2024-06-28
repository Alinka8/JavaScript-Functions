// Online Shopping Experience

let isLoggedIn = true; // Change to false to simulate a logged-out user
let cart = [];
let products = ["Apple", "Banana", "Orange", "Pear"];
let productPrices = {
  Apple: 1.0,
  Banana: 0.5,
  Orange: 0.75,
  Pear: 1.25,
};

console.log("Available products:");
for (let i = 0; i < products.length; i++) {
  console.log(`${i + 1}. ${products[i]}`);
}

function addToCart(product) {
  if (isLoggedIn) {
    cart.push(product);
    console.log(`${product} has been added to your cart.`);
  } else {
    console.log("Please log in to add items to your cart.");
  }
}

function calculateTotalCost(cart) {
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCost += productPrices[cart[i]];
  }
  return totalCost;
}

addToCart(products[1]); // Add 'Banana'
addToCart(products[3]); // Add 'Pear'

let totalCost = calculateTotalCost(cart);
console.log(`Total cost: $${totalCost.toFixed(2)}`);

// Simple Banking System

let balance = 0;

function deposit(amount) {
  balance += amount;
  console.log(`Deposited: $${amount}. New balance: $${balance}`);
}

function withdraw(amount) {
  if (amount <= balance) {
    balance -= amount;
    console.log(`Withdrew: $${amount}. New balance: $${balance}`);
  } else {
    console.log("Insufficient funds.");
  }
}

function checkBalance() {
  console.log(`Current balance: $${balance}`);
}

// Test banking functions
deposit(100);
withdraw(30);
checkBalance();
