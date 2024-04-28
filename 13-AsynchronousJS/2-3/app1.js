// 🌟 13.2.3 Resolving Promises

function c1(response) {
  console.log(`🤔`, p1); // fullfilled
  let p4 = response.json();
  console.log(`🙋`, p4); // pending
  return p4; // returns promise 4
}
// callback 2
function c2(profile) {
  console.log(`🌟`, p2); // fullfilled
  console.log(profile);

  // return new Promise((resolve, reject) => {
  //   resolve(new Error("Time travel not yet implemented"));
  // });
}

let p1 = fetch("http://localhost:3000/web"); // promise 1, task 1
console.log(p1); // pending
let p2 = p1.then(c1); // promise 2, task 2
console.log(p2); // pending
let p3 = p2.then(c2); // promise 3, task 3
console.log(p3); // pending
// p3.catch((res) => {
//   console.log(`😅`);
// });

setTimeout(() => {
  console.log(`⛔️`, p1, p2, p3); // fulfill
}, 5000);
