// 🌟 13.2.2 Chaining Promises
// Ex. hypothetical Promise chain
fetch("http://localhost:3000/web") // Make an HTTP request
  .then((response) => response.json()) // Ask for the JSON body of the response
  .then((document) => {
    // When we get the parsed JSON
    return render(document); // display the document to the user
  })
  .then((rendered) => {
    // When we get the rendered document
    console.log(`🔥 ${rendered}`);
    //cacheInDatabase(rendered); // cache it in the local database.
  })
  .catch((error) => handle(error)); // Handle any errors that occur

// ✨ callbacks 정의
function render(items) {
  const contatiner = document.querySelector("#dweb");
  contatiner.innerHTML = items.map((item) => createHTMLString(item)).join("");
}
function createHTMLString(item) {
  return `<li> <span>${item.studentID} : ${item.name}</span> </li>`;
}

function handle(e) {
  console.log("Catch Block");
  alert(`Error happens: ${e.name}: ${e.message}`);
}
