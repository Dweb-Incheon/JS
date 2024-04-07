// 😃 resolve:  https://jsonplaceholder.typicode.com/posts
// 🤬 reject (throw error):  https://api/user/profile

fetch("https://api/user/profile") // Start the HTTP request
  .then((response) => {
    // Call this when status and headers are ready

    if (!response.ok) {
      // If we got a 404 Not Found or similar error
      // 🌟 response.ok 의 status code가 200 과 같은 정상 결과가 아닌 경우 null 반환
      return null; // Maybe user is logged out; return null profile
    }
    // Now check the headers to ensure that the server sent us JSON.
    // If not, our server is broken, and this is a serious error!
    let type = response.headers.get("content-type");
    if (type !== "application/json; charset=utf-8") {
      throw new TypeError(`Expected JSON, got ${type}`);
    }
    // If we get here, then we got a 2xx status and a JSON content-type
    // so we can confidently return a Promise for the response
    // body as a JSON object.
    return response.json();
  })
  .then((profile) => {
    // Called with the parsed response body or null
    if (profile) {
      displayUserProfile(profile);
    } else {
      // If we got a 404 error above and returned null we end up here
      displayLoggedOutProfilePage();
    }
  })
  .catch((e) => {
    if (e instanceof NetworkError) {
      // fetch() can fail this way if the internet connection is down
      displayErrorMessage("Check your internet connection.");
    } else if (e instanceof TypeError) {
      // This happens if we throw TypeError above
      displayErrorMessage("Something is wrong with our server!");
    } else {
      // This must be some kind of unanticipated error
      console.error(e);
    }
  })
  .finally(() => {
    console.log(`🙌 Terminate Program`);
  });

class NetworkError {}
function displayUserProfile(profile) {
  console.log(`😀 Resolve`);
}
function displayLoggedOutProfilePage() {}
function displayLoggedOutProfilePage() {}
function displayErrorMessage(msg) {
  console.log(msg);
}
