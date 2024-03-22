let o = { s: "test", n: 0 };
let a = JSON.stringify(o, null, 2); // => '{\n "s": "test",\n "n": 0\n}'

console.log(a);
