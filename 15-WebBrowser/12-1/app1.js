let names = localStorage.username; // Query a stored value.
if (!names) {
  names = prompt("What is your name?"); // Ask the user a question.
  localStorage.username = names; // Store the user's response.
}
localStorage.clear();
