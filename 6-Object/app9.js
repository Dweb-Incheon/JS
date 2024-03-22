let o = { x: 1 };

// in operator → It returns true if the object has an own property or an inherited property by that name.
if ("x" in o) console.log("😀"); // => true: o has an own property "x"
console.log("y" in o); // => false: o doesn't have a property "y"
"toString" in o; // => true: o inherits a toString property

o.hasOwnProperty("x"); // => true: o has an own property x
o.hasOwnProperty("y"); // => false: o doesn't have a property y
o.hasOwnProperty("toString"); // => false: toString is an inherited property

o.propertyIsEnumerable("x"); // => true: o has an own enumerable property x
o.propertyIsEnumerable("toString"); // => false: not an own property
Object.prototype.propertyIsEnumerable("toString"); // => false: not enumerable

o.x !== undefined; // => true: o has a property x
o.y !== undefined; // => false: o doesn't have a property y
o.toString !== undefined; // => true: o inherits a toString property

let o1 = { x: undefined }; // Property is explicitly set to undefined
o1.x !== undefined; // => false: property exists but is undefined
o1.y !== undefined; // => false: property doesn't even exist
"x" in o1; // => true: the property exists
"y" in o1; // => false: the property doesn't exist
delete o1.x; // Delete the property x
"x" in o1; // => false: it doesn't exist anymore
