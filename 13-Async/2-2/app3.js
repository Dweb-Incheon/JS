// Naive way to get a body of response obhect
fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
  response.json().then((profile) => {
    // Ask for the JSON-parsed body
    // When the body of the response arrives, it will be automatically;
    // parsed as JSON and passed to this function.
    displayUserProfile(profile);
  });
});
function displayUserProfile(body) {
  console.log(body);
}
