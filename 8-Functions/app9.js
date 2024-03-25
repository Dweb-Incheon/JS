// 🌟 8.3.1 Optional Parameters and Defaults
"use strict";
// Append the names of the enumerable properties of object o to the
// array a, and return a.  If a is omitted, create and return a new array.
function getPropertyNames(o, a) {
  if (a === undefined) a = []; // If undefined, use a new array
  for (let property in o) a.push(property);
  return a;
}
// getPropertyNames() can be invoked with one or two arguments:
let o = { x: 1 },
  p = { y: 2, z: 3 }; //Two objects for testing
let a = getPropertyNames(o); // a == ["x"]; get o's properties in a new array
console.log(`before`, a);
getPropertyNames(p, a); // a == ["x","y","z"]; add p's properties to it
console.log(`after`, a);
