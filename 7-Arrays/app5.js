let a = ["world"]; // Start with a one-element array
let value = a[0]; // Read element 0
a[1] = 3.14; // Write element 1
let i = 2;
a[i] = 3; // Write element 2
a[i + 1] = "hello"; // Write element 3
a[a[i]] = a[0]; // Read elements 0 and 2, write

a.length; // => 4

let o = {}; // Create a plain object
o[1] = "one"; // Index it with an integer
o["1"]; // => "one"; numeric and string property names are the same

a[-1.23] = true; // This creates a property named "-1.23"
a["1000"] = 0; // This the 1001st element of the array
a[1.0] = 1; // Array index 1. Same as a[1] = 1;

let b = [true, false]; // This array has elements at indexes 0 and 1
b[2]; // => undefined; no element at this index.
b[-1]; // => undefined; no property with this name.
