// ✨ 11.1.2 The Map Class

let m = new Map([
  ["x", 1],
  ["y", 2],
]);

m.forEach((value, key) => {
  console.log(`🔑 ${key} : 💕 ${value}`);
  // note value, key NOT key, value
  // On the first invocation, value will be 1 and key will be "x"
  // On the second invocation, value will be 2 and key will be "y"
});
