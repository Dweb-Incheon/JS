// ✨ How Iterators Work

let iterable = [99];
let iterator = iterable[Symbol.iterator]();
for (let result = iterator.next(); !result.done; result = iterator.next()) {
  console.log(result.value); // result.value == 99
}

let list = [1, 2, 3, 4, 5];
let iter = list[Symbol.iterator]();
let head = iter.next().value; // head == 1
iter.next();
let tail = [...iter]; // tail == [2,3,4,5]
console.log(tail);
