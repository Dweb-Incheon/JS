// 🌟 13.3.2 async Functions

displayHighScore(await getHighScore());

getHighScore().then(displayHighScore).catch(console.error);

async function getHighScore() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let profile = await response.json();
  console.log(`💕`);
  return profile;
}

function displayHighScore(xxx) {
  console.log(xxx);
}
