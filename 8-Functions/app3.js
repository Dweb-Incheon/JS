// 🌟 8.1.3. arrow functions

const sum1 = (x, y) => {
  return x + y;
};
const sum2 = (x, y) => x + y;
const polynomial = (x) => x * x + 2 * x + 3;
const constantFunc = () => 42;

const f = (x) => {
  return { value: x };
}; //Good:f() returns an object
const g = (x) => ({ value: x }); // returns an object
const h = (x) => {
  value: x;
}; // nothing

// const i = x => { v: x, w: x }; // Error

// Make a copy of an array with null elements removed.
let filtered = [1, null, 2, 3].filter((x) => x !== null); //filtered == [1, 2, 3];
// Square some numbers:
let squares = [1, 2, 3, 4].map((x) => x * x); // squares == [1,4,9,16]
