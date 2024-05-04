// 🌟 13.2.2 Chaining Promises

// 🌟 method chain: fetch().then().then() ✨
// 😀 The preferred idiom to use Promises in a sequential chain

let p = fetch("http://localhost:3000/web")
  .then((response) => {
    return response.json();
  })
  .then((profile) => {
    displayUserProfile(profile);
  });

console.log(p);

setTimeout(() => {
  console.log(p);
}, 5000);

function displayUserProfile(body) {
  console.log(body);
}
