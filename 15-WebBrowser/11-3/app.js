// Establish WebSocket connection with the server
const ws = new WebSocket("ws://localhost:3000");

// Event listener for receiving messages from the server
ws.addEventListener("message", (event) => {
  const messageDiv = document.createElement("div");

  messageDiv.textContent = event.data;
  document.getElementById("chat-messages").appendChild(messageDiv);
});

// Event listener for submitting the form (sending a message)
document.getElementById("message-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value;
  if (message.trim() !== "") {
    sendMessage(message);
    messageInput.value = "";
  }
});

// Function to send a message to the server
const sendMessage = (message) => {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(message);
  } else {
    console.error("WebSocket connection is not open.");
  }
};
