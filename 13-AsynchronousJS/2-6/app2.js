// 🌟 Promise를 만드는 두 번째 방법: "Promise.resolve()" 와 "Promise.reject()" 활용

// 😃 Resolve.  "https://jsonplaceholder.typicode.com/posts"
// 😡 Reject.   "https://api/user/profile"

function wait(duration) {
  // Create and return a new Promise
  return new Promise((resolve, reject) => {
    // These control the Promise
    // If the argument is invalid, reject the Promise
    if (duration < 0) {
      reject(new Error("Time travel not yet implemented"));
    }
    // Otherwise, wait asynchronously and then resolve the Promise.
    // setTimeout will invoke resolve() with no arguments, which means
    // that the Promise will fulfill with the undefined value.
    setTimeout(resolve, duration);
  });
}
wait(-2000)
  .then(() => {
    console.log(`🎊`);
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(() => {
    alert(`😃     🧑‍💻`);
  });
