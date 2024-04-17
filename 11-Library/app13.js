// ✨ 11.1.2 The Map Class

let m = new Map([
  ["x", 1],
  ["y", 2],
]);
[...m]; // => [["x", 1], ["y", 2]]

for (let [key, value] of m) {
  // On the first iteration, key will be "x" and value will be 1
  // On the second iteration, key will be "y" and value will be 2
}
