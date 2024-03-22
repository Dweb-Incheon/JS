"use strict";

let book = {
  "main title": "JavaScript",
  "sub-title": "The Definitive Guide",
  for: "all audiences",
  author: {
    firstname: "David",
    surname: "Flanagan",
  },
};

delete book.author; // The book object now has no author property.
delete book["main title"]; // Now it doesn't have "main title", either.

let o = { x: 1 }; // o has own property x and inherits property toString
console.log(o);
let suc = delete o.x; // => true: deletes property x
console.log(o);
console.log("✨ true:false", suc);

delete o.x; // => true: does nothing (x doesn't exist) but true anyway
delete o.toString; // => true: does nothing (toString isn't an own property)
delete 1; // => true: nonsense, but true anyway

// Prototype으로부터 상속받은 property가 삭제되진 않음 (Query와는 다름)
let obj = Object.create({ x: 1 });

let succeed = delete obj.x;
console.log(obj.__proto__);

// In strict mode, all these deletions throw TypeError instead of returning false
delete Object.prototype; // => false: property is non-configurable
var x = 1; // Declare a global variable
delete globalThis.x; // => false: can't delete this property
function f() {} // Declare a global function
delete globalThis.f; // => false: can't delete this property either
