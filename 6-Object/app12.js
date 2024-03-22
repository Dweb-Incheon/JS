let o = { x: 1, y: { z: [false, null, ""] } }; // Define a test object
let s = JSON.stringify(o); // s == '{"x":1,"y":{"z": [false,null,""]}}'
let p = JSON.parse(s); // p == {x: 1, y: {z: [false, null, ""]}}

console.log(typeof o);
console.log(typeof s);
console.log(typeof p);
