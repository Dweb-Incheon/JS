// 🌟 13.3.2 async Functions

async function getHighScore() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let profile = await response.json();
  console.log(`💕`);
  return profile.highScore;
}

let s = getHighScore();
console.log(s);
console.log(`⏰`);

setTimeout(() => {
  console.log(s);
}, 3000);
