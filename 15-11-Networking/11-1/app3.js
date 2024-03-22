// 🌟 fetch 함수에서 ✨✨ 모든 헤더 값 출력하는 방법

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    for (let [name, value] of response.headers) {
      console.log(`${name}: ${value}`);
    }
    return response.json();
  })
  .then((currentUser) => {
    displayUserInfo(currentUser);
  })
  .catch((error) => {
    console.log("Error while fetching current user:", error);
  });

function displayUserInfo(currentUser) {
  console.log(currentUser[0]);
}
