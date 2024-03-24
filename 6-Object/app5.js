"use strict";
function computeValue(portfolio) {
  let total = 0.0;
  for (let stock in portfolio) {
    // For each stock in the portfolio:
    let shares = portfolio[stock]; // get the number of shares
    let price = getQuote(stock); // look up share price
    total += shares * price; // add stock value to total value
  }
  return total;
}

// Remember
let arr = ["book", "pen", "note"];
let obj = { book: {}, pen: {}, note: {} };

for (let i in arr) {
  console.log("📚", arr[i]);
}
for (let i in obj) {
  console.log("✨", i);
}
