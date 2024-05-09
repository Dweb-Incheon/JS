// 🌟 fetch 함수 사용 예시
// ✨ status property는 HTTP status code를 의미
//    - 200 : 요청에 성공한 것
//    - 404 : Not Found
// ✨ 200이면, Response의 ok Property가 "true"

fetch("http://localhost:3000/web")
  .then((response) => {
    if (
      response.ok &&
      response.headers.get("Content-Type") === "application/json; charset=utf-8"
    ) {
      // console.log(response.headers.has("Content-Type"));
      return response.json();
    } else {
      throw new Error(
        `Unexpected response status ${response.status} or content type`
      );
    }
  })
  .then((profile) => {
    return displayUserInfo(profile);
  })
  .then((res) => console.log(res))
  .catch((error) => {
    console.log("Error while fetching current user:", error);
  });

// 📚 fetch 데이터를 IndexedDB에 저장할 것
function displayUserInfo(data) {
  console.log(data);
  return `🌟 Completed`;
}
