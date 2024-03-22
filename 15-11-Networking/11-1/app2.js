// 🌟 fetch 함수 사용 예시
// ✨ status property는 HTTP status code를 의미
//    - 200 : 요청에 성공한 것
//    - 404 : Not Found
// ✨ 200이면, Response의 ok Property가 "true". 200~299이면, "fause"

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (
      response.ok &&
      response.headers.get("Content-Type") === "application/json; charset=utf-8"
    ) {
      console.log(response.headers.has("Content-Type"));
      return response.json();
    } else {
      throw new Error(
        `Unexpected response status ${response.status} or content type`
      );
    }
  })
  .then((currentUser) => {
    displayUserInfo(currentUser);
  })
  .catch((error) => {
    console.log("Error while fetching current user:", error);
  });

function displayUserInfo(currentUser) {
  console.log(currentUser[0]["title"]);
}
