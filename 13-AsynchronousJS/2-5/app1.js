// 🌟 13.2.5 Promises in Parallel

// 🌟 Promise.all()

async function getJSON(url) {
  let response = await fetch(url);
  let body = await response.json();
  console.log(url);
  return body;
}

// 🌟 getJSON 함수가 순차적으로 수행됨
let P = Promise.all([
  getJSON("https://jsonplaceholder.typicode.com/posts"),
  getJSON("https://jsonplaceholder.typicode.com/comments"),
  // 주석을 풀면 Rejected
  // getJSON("https://api/user/profile")
]);
P.then((res) => {
  console.log(P);
  console.log(res[0]);
  console.log(res[1]);
}).catch((e) => {
  // 😀 하나라도 Reject 되는 경우 에러 반환
  console.log(P);
  console.log(e);
});
