let a = []; // Start with an empty array.
a[0] = "zero"; // And add elements to it.
a[1] = "one";

let b = []; // Start with an empty array
b.push("zero"); // Add a value at the end. a = ["zero"]
b.push("one", "two"); // Add two more values. a = ["zero", "one", "two"]

let c = [1, 2, 3];
delete c[2]; // a now has no element at index 2
2 in c; // => false: no array index 2 is defined
c.length; // => 3: delete does not affect array length
