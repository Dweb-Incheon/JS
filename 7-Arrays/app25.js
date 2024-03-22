let a = { 0: "a", 1: "b", 2: "c", length: 3 }; // An array-like object
Array.prototype.join.call(a, "+"); // => "a+b+c"
Array.prototype.map.call(a, (x) => x.toUpperCase()); // => 배열을 반환. ["A","B","C"]
Array.prototype.slice.call(a, 0); // => ["a","b","c"]: true array copy
Array.from(a); // => ["a","b","c"]: easier array copy
