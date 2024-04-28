// ✨ So far, we have made an HTTP (or HTTPS) GET request.
// ✨ If you want to use a different request method (such as POST, PUT, or DELETE),
// ✨ simply use the two-argument version of fetch()

// ✨ POST and PUT requests typically have a request body
//                     containing data to be sent to the server.
const data = { username: "dweb", comments: "인천대학교" };
// ✨ with JSON-server
fetch("http://localhost:3000/comments", {
  method: "POST",
  headers: {
    "Content-Type": "application/json", //json 형식으로 주고
  },
  body: JSON.stringify(data),
})
  .then((res) => {
    if (res.ok === true) {
      //응답의 상태가 200-299를 벗어날 경우 ok 속성은 false로 변환
      return res.json();
    }
    throw new Error("에러 발생!");
  })
  .catch((error) => {
    alert("error");
  })
  .then((data) => {
    console.log(data);
  });
