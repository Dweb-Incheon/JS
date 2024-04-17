// ✨ 11.1.2 The Map Class

let m = new Map(); // Start with an empty map.
m.set({}, 1); // Map one empty object to the number 1.
m.set({}, 2); // Map a different empty object to the number 2.
m.size; // => 2: there are two keys in this map
m.get({}); // => undefined: but this empty object is not a key
m.set(m, undefined); // Map the map itself to the value undefined.
m.has(m); // => true: m is a key in itself
m.get(m); // => undefined: same value we'd get if m wasn't a key
