"use strict";
// Example 1
let o = {}; // o inherits object methods from Object.prototype
o.x = 1; // and it now has an own property x.
let p = Object.create(o); // p inherits properties from o and Object.prototype
p.y = 2; // and has an own property y.
let q = Object.create(p); // q inherits properties from p, o, and...
q.z = 3; // ...Object.prototype and has an own property z.
let f = q.toString(); // toString is inherited from Object.prototype
q.x + q.y; // => 3; x and y are inherited from o and p

// Example 2
let unitcircle = { r: 1 }; // An object to inherit from
let c = Object.create(unitcircle); // c inherits the property r
c.x = 1;
c.y = 1; // c defines two properties of its own
c.r = 2; // c overrides its inherited property
unitcircle.r; // => 1: the prototype is not affected

c.__proto__.r = 100;
unitcircle.r; // => 100
