let name = localStorage.username; // Query a stored value.
if (!name) {
  name = prompt("What is your name?"); // Ask the user a question.
  localStorage.username = name; // Store the user's response.
}
localStorage.clear();
