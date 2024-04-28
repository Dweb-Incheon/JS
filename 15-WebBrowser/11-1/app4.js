// ✨ Setting Request Parameters
// 🌟🌟 파라미터를 "URL"과 함께 전달하고 싶을 때
//     - searchParams 사용할 것
//     - Network에서 요청 헤더를 살펴볼 것 "?hi=dweb"

async function search(term) {
  let url = new URL("https://jsonplaceholder.typicode.com/posts");
  url.searchParams.set("hi", term);
  let response = await fetch(url);
  if (!response.ok) throw new Error(response.statusText);
  let resultsArray = await response.json();
  return resultsArray;
}

search("dweb").then((res) => {
  console.log(res);
});
