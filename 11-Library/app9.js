// ✨ 11.1.2 The Map Class

let n = new Map([
  // A new map initialized with string keys mapped to numbers
  ["one", 1],
  ["two", 2],
]);

let copy = new Map(n); // A new map with the same keys and values as map n
let o = { x: 1, y: 2 }; // An object with two properties
let p = new Map(Object.entries(o)); // Same as new map([["x", 1], ["y", 2]])
