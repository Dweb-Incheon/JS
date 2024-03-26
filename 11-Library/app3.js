// ✨ Enumerable & Iterable Object

let arr = [2, 3, 4, 5];
for (let docs of arr) {
  console.log(docs);
}

console.log(arr[Symbol.iterator]());

let obj = { x: 1, y: 2 };

let str = "dweb";
for (let c of str) {
  console.log(c);
}
