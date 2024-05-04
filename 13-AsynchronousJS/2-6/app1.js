// 🌟 13.2.6 Making Promises - Promises based on other Promises

// 🌟 Promise를 만드는 첫 번째 방법: Promise를 반환하는 함수를 이용하자
// 🤔 Promise를 만드는 getJSON() 함수를 만들어보자
// 😃 Resolve.  "https://jsonplaceholder.typicode.com/posts"
// 😡 Reject.   "https://api/user/profile"

function getJSON(url) {
  return fetch(url).then((response) => response.json());
}

function getHighScore() {
  return getJSON("http://localhost:3000/web").then((profile) => {
    for (let i in profile) console.log(`💕`, profile[i].studentID);
  });
}

getHighScore();
console.log(`🌟 getJSON, getHighScore도 이제 비동기 함수들입니다.`);
