// 🌟 Header object is iterable

fetch("http://localhost:3000/web")
  .then((response) => {
    if (
      response.ok &&
      response.headers.get("Content-Type") === "application/json; charset=utf-8"
    ) {
      // console.log(response.headers.has("Content-Type"));
      for (let [name, value] of response.headers) {
        console.log(`${name}: ${value}`);
      }
    } else {
      throw new Error(
        `Unexpected response status ${response.status} or content type`
      );
    }
  })
  .catch((error) => {
    console.log("Error while fetching current user:", error);
  });
