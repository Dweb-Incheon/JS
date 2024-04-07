// 🌟 13.1.3 Network Events
let obj;
function getCurrentVersionNumber() {
  // Turn on "json-server"
  let request = new XMLHttpRequest();
  request.open("GET", "http://localhost:3000/web");
  request.send();
  // Register a callback that will be invoked when the response arrives
  request.onload = () => {
    if (request.status === 200) {
      // If HTTP status is good, get version number and call callback.
      const obj = JSON.parse(request.response); // string -> JSON object
      console.log(typeof obj); // object
      console.log(obj);
      console.log(`${obj[0].id}`);
    } else {
      // Otherwise report an error to the callback
    }
  };
  console.log(`😃 내가 먼저 실행되지롱~`);
  console.log(`🙋 나도 나도 실행되지롱~`);
  console.log(`😊 나도 나도`);

  // Register another callback that will be invoked for network errors
  request.onerror = request.ontimeout = function (e) {};
}
