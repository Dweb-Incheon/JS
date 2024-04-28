// ✨✨ Do it with Express-Server
// 📚📚 https://velog.io/@archivvonjang/Node.js-간단한-API-서버-만들기

// Select your input type file and store it in a variable
const input = document.getElementById("fileinput");

// This will upload the file after having read it
const upload = (file) => {
  fetch("http://localhost:3000/incheon", {
    // Your POST endpoint
    method: "POST",
    // If you add this, upload won't work
    // headers: {
    //   'Content-Type': 'multipart/form-data',
    // }
    body: file, // This is your file object
  })
    .then(
      (response) => response.json() // if the response is a JSON object
    )
    .then(
      (success) => console.log(success) // Handle the success response object
    )
    .catch(
      (error) => console.log(error) // Handle the error response object
    );
};

// Event handler executed when a file is selected
const onSelectFile = () => {
  upload(input.files[0]);
  console.log(input.files[0]);
};

// Add a listener on your input
// It will be triggered when a file will be selected
input.addEventListener("change", onSelectFile, false);
