// 🌟 await → 프로미스를 반환하는 함수에 사용됨. 여전히 비동기 코드라는 것을 염두할 것
// 🌟🌟 따라서, "async" 와 함께 쓰여야 함
// 🌟🌟 "You can only use the await keyword within functions
//             that have been declared with the async keyword"
// 😃 Resolve.  "https://jsonplaceholder.typicode.com/posts"
// 😡 Reject.   "https://api/user/profile"

async function getJSON() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let profile = await response.json();
  console.log(`😀`); // getJSON 함수 안에서는 동기적으로 수행됨
  return profile[0];
}
console.log(`😡`);
getJSON().then((res) => {
  console.log(res);
});
console.log(`🤬`); // 😡 -> 🤬 -> 😀 순서로 출력
