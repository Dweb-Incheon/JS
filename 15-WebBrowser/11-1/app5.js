// ✨ SETTTING REQUEST HEADERS (자원 요청 시 헤더 설정하기)
//  - 예를들면, Credential이 포함된 Authorization header를 만들 수 있음
//  🌟방법🌟
//   fetch()의 "첫 번째 인자에 URL", "두 번째 인자에 객체(헤더)"를 넣을 것

const username = "dweb";
const password = "1234";

let authHeaders = new Headers();
// ✨ Request 헤더에 Authorization과 Dweb 필드가 추가된 것을 확인할 수 있음
authHeaders.set("Authorization", `Basic ${btoa(`${username}:${password}`)}`);
authHeaders.set("Dweb", `Incheon National University`);
fetch("https://jsonplaceholder.typicode.com/posts", { headers: authHeaders })
  .then((response) => response.json())
  .then((usersList) => console.log(usersList));

// ✨ fetch()에 인자 두 개를 전달하는 또 다른 방법
//  -  Ruquest 생성자 사용
let url = "https://jsonplaceholder.typicode.com/comments";
let request = new Request(url, { authHeaders });
fetch(request)
  .then((res) => {
    return res.text();
  })
  .then((data) => {
    console.log(data);
  });
