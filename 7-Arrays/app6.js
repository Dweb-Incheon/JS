let a = new Array(5); // No elements, but a.length is 5.
a = []; // Create an array with no elements and length = 0.
a[1000] = 0; // Assignment adds one element but sets length to 1001.

let a1 = [,]; // This array has no elements and length 1
let a2 = [undefined]; // This array has one undefined element
0 in a1; // => false: a1 has no element with index 0
0 in a2; // => true: a2 has the undefined value at index 0
