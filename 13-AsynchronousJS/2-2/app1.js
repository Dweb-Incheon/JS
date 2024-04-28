// 🌟 13.2.2 Chaining Promises

fetch("http://localhost:3000/web").then((response) => {
  // When the promise resolves, we have status and headers
  if (response.ok) {
    console.log(response); // What can we do here? We don't actually have the response body yet.
  }
});
