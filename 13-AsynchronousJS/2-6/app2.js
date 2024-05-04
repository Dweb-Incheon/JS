// 🌟 13.2.6 Making Promises - Promises from scratch
// 🌟 Promise를 만드는 두 번째 방법: "Promise.resolve()" 와 "Promise.reject()" 활용

function wait(duration) {
  // Create and return a new Promise
  return new Promise((resolve, reject) => {
    if (duration < 0) {
      reject(new Error("Time travel not yet implemented"));
    }
    setTimeout(() => {
      resolve(fetch("http://localhost:3000/web"));
    }, duration);
  });
}

wait(-2000)
  .then(() => {
    console.log(`🐥`);
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    alert(`🤔 👍`);
  });

console.log(p);

setTimeout(() => {
  console.log(p);
}, 5000);
