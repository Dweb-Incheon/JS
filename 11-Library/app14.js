// ✨ 11.1.2 The Map Class

let m = new Map([
  ["x", 1],
  ["y", 2],
]);

[...m.keys()]; // => ["x", "y"]: just the keys
[...m.values()]; // => [1, 2]: just the values
[...m.entries()]; // => [["x", 1], ["y", 2]]: same as [...m]
