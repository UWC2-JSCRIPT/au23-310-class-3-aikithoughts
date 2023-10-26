// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price
let taxRate = .65; // Extra credit. Making up the tax rate.

const logReceipt = (...items) => {
  let subtotal = 0;
  let taxes = 0;
  let total = 0;
  items.forEach(item => {
    console.log(`${item.descr} - ${item.price}`)
    subtotal = subtotal + item.price;
  })
  taxes = taxes = (subtotal * taxRate).toFixed(2);
  total = subtotal + parseFloat(taxes);
  console.log("Subtotal -", subtotal);
  console.log("Tax", taxes);
  console.log("Total", total);

};



// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
