// index2.js 와 동일한 코드

function c1(response) {
  let p4 = response.json();
  console.log("🤔");
  console.log(p1); // fullfilled
  return p4; // returns promise 4
}
// callback 2
function c2(profile) {
  console.log(profile);
  console.log("🌟");
  console.log(p2); // fullfilled
}

let p1 = fetch("https://jsonplaceholder.typicode.com/posts"); // promise 1, task 1
console.log(p1); // pending
let p2 = p1.then(c1); // promise 2, task 2
console.log(p2); // pending
let p3 = p2.then(c2); // promise 3, task 3
console.log(p3); // pending
