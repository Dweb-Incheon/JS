// 🌟 method chain: fetch().then().then() ✨
// 😀 The preferred idiom to use Promises in a sequential chain

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((profile) => {
    displayUserProfile(profile);
  });

function displayUserProfile(body) {
  console.log(body);
}
