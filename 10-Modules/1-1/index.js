const bitSet = require("sets.js").BitSet;
const stats = require("stats.js");

let s = new bitSet();
s.insert(10);
s.insert(20);
s.insert(30);
let average = stats.mean([...s.arr]); // average is 20
console.log(average);
