// Importing required modules
const WebSocket = require("ws");
const http = require("http");
const fs = require("fs");

// Create a HTTP server
const server = http.createServer((req, res) => {
  // Serve the HTML file
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end("Error loading index.html");
    }
    res.writeHead(200);
    res.end(data);
  });
});

// Create a WebSocket server
const wss = new WebSocket.Server({ server });

// Event listener for when a client connects to the server
wss.on("connection", (ws) => {
  // Event listener for when a message is received from a client
  ws.on("message", (message) => {
    // Broadcast the received message to all clients
    console.log(`💕`, message);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
