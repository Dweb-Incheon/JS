// fetch() 함수는 첫번째 인자로 URL (두번째 인자로 옵션 객체를 받고)
// Promise 타입의 객체를 반환
// 반환된 객체는, API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고,
// 실패했을 경우에는 예외(error) 객체를 reject

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json(); // Promise 를 던짐
  })
  .then((myJson) => {
    // Promise 결과: 배열 객체
    console.log(myJson[0]);
    console.log(myJson[0].title);
  });
