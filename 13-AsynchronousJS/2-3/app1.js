// 🌟 13.2.3 Resolving Promises

function c1(response) {
  console.log(`✨p1:`, p1); // fullfilled
  let p = response.json();
  console.log(`✨p returned by json:`, p); // pending
  return p; // returns promise!
}

function c2(profile) {
  console.log(profile);
  // return new Promise((resolve, reject) => {
  //   resolve(new Error("Time travel not yet implemented"));
  // });
}

let p1 = fetch("http://localhost:3000/web"); // promise 1, task 1
let p2 = p1.then(c1); // promise 2, task 2
let p3 = p2.then(c2); // promise 3, task 3

console.log(`p1:`, p1); // pending
console.log(`p2:`, p2); // 🌟 Remember if callback returns a promise, that promise would be a pending(resolve) state.
console.log(`p3:`, p3); // pending

setTimeout(() => {
  console.log(`⛔️p1:`, p1, `⛔️p2:`, p2, `⛔️p3:`, p3); // fulfill
}, 5000);
