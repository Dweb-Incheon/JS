"use strict";

const start = new Date();
let i = 0;
const intervalId = setInterval(() => {
  let now = new Date();
  if (now.getMinutes() !== start.getMinutes() || ++i > 10)
    return clearInterval(intervalId);
  console.log(`${i}: ${now}`);
}, 5 * 1000);

// const start = new Date();
// let i = 0;
// const intervalId = setInterval(function () {
//   let now = new Date();
//   if (now.getMinutes() !== start.getMinutes() || ++i > 10)
//     return clearInterval(intervalId);
//   console.log(`${i}: ${now}`);
// }, 5 * 1000);
