// ✨ 11.1.2 The Map Class

let m = new Map(); // Start with an empty map
m.size; // => 0: empty maps have no keys
m.set("one", 1);
m.set("two", 2);
m.size;
m.get("two"); // => 2: return the value associated with key "two"
m.get("three");
set;
m.set("one", true); // Change the value associated with an existing key
m.size;
m.has("one");
m.has(true); //false: the map does not have a key true
m.delete("one");
m.size;
m.delete("three"); // false: failed to delete a nonexistent key
m.clear();
