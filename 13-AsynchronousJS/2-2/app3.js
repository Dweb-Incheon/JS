// 🌟 13.2.2 Chaining Promises

// 🌟 method chain: fetch().then().then() ✨
// 😀 The preferred idiom to use Promises in a sequential chain

fetch("http://localhost:3000/web")
  .then((response) => {
    return response.json();
  })
  .then((profile) => {
    displayUserProfile(profile);
  });

function displayUserProfile(body) {
  console.log(body);
}
