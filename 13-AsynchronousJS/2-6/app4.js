// 🌟 13.2.6 Making Promises - Promises from scratch
// 🌟 Promise를 만드는 두 번째 방법: "Promise.resolve()" 와 "Promise.reject()" 활용

function wait(duration) {
  // Create and return a new Promise
  return new Promise((resolve, reject) => {
    // If the argument is invalid, reject the Promise
    if (duration < 0) {
      setTimeout(() => {
        reject(new Error("Time travel not yet implemented"));
      }, 1000);
    }
    // Otherwise, wait asynchronously and then resolve the Promise.
    // setTimeout will invoke resolve() with no arguments, which means
    // that the Promise will fulfill with the undefined value.
    else
      setTimeout(() => {
        resolve(fetch("http://localhost:3000/web"));
      }, duration);
  });
}

let p = wait(1000);

p.then((response) => {
  return response.text();
})
  .then((profile) => {
    console.log(`✨`, profile);
  })
  .catch((e) => {
    console.error(e);
  });

console.log(p);

setTimeout(() => {
  console.log(p);
}, 5000);
