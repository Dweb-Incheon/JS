// 🌟 Making a Promise in Node Environment
// 🌟 In this example, we're not going to use Fetch() API.
// 😃 Resolve.  "https://jsonplaceholder.typicode.com/posts"
// 😡 Reject.   "https://api/user/profile"

import https from "https";

getJSON("https://jsonplaceholder.typicode.com/posts").then((parse) => {
  console.log(`🎊 ${parse[1]["body"]}`);
});

function getJSON(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP Status ${response.statusCode}`));
        response.resume(); // so we don't leak memory
      } else if (
        response.headers["content-type"] !== "application/json; charset=utf-8"
      ) {
        reject(new Error("Invalid content-type"));
        response.resume();
      } else {
        // Otherwise, register events to read the body of the response
        let body = "";
        response.setEncoding("utf-8");
        response.on("data", (chunk) => {
          body += chunk;
        });
        response.on("end", () => {
          // When the response body is complete, try to parse it
          try {
            let parsed = JSON.parse(body);
            // If it parsed successfully, fulfill the promise
            resolve(parsed);
          } catch (e) {
            // If parsing failed, reject the Promise
            reject(e);
          }
        });
      }
    });
    // We also reject the Promise if the request fails before we
    // even get a response (such as when the network is down)
    request.on("error", (error) => {
      reject(error);
    });
  });
}
