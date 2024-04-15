$.getJSON("http://localhost:3000/web").then((jsonData) => {
  console.log(jsonData);
  // This is a callback function that will be asynchronously
  // invoked with the parsed JSON value when it becomes available.
});
// Suppose you have a function like this to display a user profile

//function displayUserProfile(profile) {
/* implementation omitted */
//}
// Here's how you might use that function with a Promise.
// Notice how this line of code reads almost like an English sentence: getJSON("/api/user/profile").then(displayUserProfile);
//getJSON("/api/user/profile").then(displayUserProfile, handleProfileError);
