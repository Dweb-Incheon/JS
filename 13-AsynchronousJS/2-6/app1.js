// 🌟 Promise를 만드는 첫 번째 방법: Promise를 반환하는 함수를 이용하자
// 🤔 Promise를 만드는 getJSON() 함수를 만들어보자
// 😃 Resolve.  "https://jsonplaceholder.typicode.com/posts"
// 😡 Reject.   "https://api/user/profile"

function getJSON(url) {
  const P0 = fetch(url).then((response) => response.json());
  setTimeout(() => {
    console.log(`🎊 P0`);
    console.log(P0);
  }, 1000);
  return P0; // json() method는 프로미스를 반환함
}

function getHighScore() {
  const P1 = getJSON("https://jsonplaceholder.typicode.com/posts").then(
    (profile) => {
      console.log(profile);
      throw new Error("숫자를 입력하세요");
    }
  );
  console.log(`🌟`);
  console.log(P1);
  setTimeout(() => {
    console.log(`🎊 🎊 P1`);
    console.log(P1);
  }, 2000);
  return P1;
}

const P2 = getHighScore();
console.log(`🤔`);
console.log(P2);
setTimeout(() => {
  console.log(`🎊 🎊 🎊 P2`);
  console.log(P2);
}, 3000);
