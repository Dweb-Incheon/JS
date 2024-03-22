// Import the entire stats object, with all of its functions
const stats = require("./stats.js");

let data = [1, 10, 11];
// We've got more functions than we need, but they're neatly
// organized into a convenient "stats" namespace.
let average = stats.mean(data);
console.log("👏avg", average);
// Alternatively, we can use idiomatic destructuring assignment to import
// exactly the functions we want directly into the local namespace:
const { stddev } = require("./stats.js");

// This is nice and succinct, though we lose a bit of context
// without the 'stats' prefix as a namspace for the stddev() function.
let sd = stddev(data);
console.log("👏sd", sd);
