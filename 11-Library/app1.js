// ✨ 11.1.1 The Set Class
"use strict";

let s = new Set(); // A new, empty set
let t = new Set([1, s]); // A new set with two members

let t1 = new Set(s); // A new set that copies the elements of s.
let unique = new Set("Mississippi"); // 4 elements: "M", "i", "s", and "p"

console.log(unique.size); // => 4
