// 🌟 13.2.4 More on Promises and Errors

// 🌟 .finally()
// 😀 the callback you pass to .finally() will be certainly invoked when the Promise you called it on settles.

fetch("https://api/user/profile") // It'll throw an error
  .then((res) => {
    console.log(`😀`);
  })
  .catch((res) => {
    console.log(`😅`);
  })
  .finally(() => {
    console.log(`😇`);
  });
