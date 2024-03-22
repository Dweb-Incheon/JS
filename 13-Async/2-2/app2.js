// Get a response
fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
  // When the promise resolves, we have status and headers
  if (
    response.ok &&
    response.type === "cors"
    // response.headers.get("Content-Type") === "application/json"
  ) {
    // What can we do here? We don't actually have the response body yet.
    console.log(response);
  }
});
