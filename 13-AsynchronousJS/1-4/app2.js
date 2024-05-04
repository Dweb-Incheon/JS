// 🌟 13.1.4 Callbacks and Events in Node

const https = require("https");

getText("https://giseok.watchdognet.com", (status, body) => {
  console.log(`statud code ${status}`);
  console.log(`body ${body}`);
});
console.log(`💕💕💕💕💕`);

// Read the text content of the URL and asynchronously pass it to the callback.
function getText(url, callback) {
  // Start an HTTP GET request for the URL
  https.get(url, (res) => {
    let httpStatus = res.statusCode;
    let body = ""; // which we will accumulate here.
    res.on(`data`, (chunk) => {
      body += chunk;
    });
    res.on(`end`, () => {
      if (httpStatus === 200) {
        // If the HTTP response was good
        callback(null, body); // Pass response body to the callback
      } else {
        // Otherwise pass an error
        callback(httpStatus, null);
      }
    });
    res.on(`error`, (err) => {
      callback(err, null);
    });
  });
}
