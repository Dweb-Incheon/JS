// 🌟 13.2.6 Making Promises - Promises from scratch

// 🌟 Promise를 만드는 두 번째 방법: "Promise.resolve()" 와 "Promise.reject()" 활용

function wait(duration) {
  // Create and return a new Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(511);
    }, duration);
  });
}

let p = wait(3000);

setTimeout(() => {
  console.log(p);
}, 1);
setTimeout(() => {
  console.log(p);
}, 5000);
