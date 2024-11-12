// Import the Express library
const express = require("express");

// Initialize an Express application
const app = express();

// Define a port for the server to listen on
const PORT = 5000;

// Create a basic route that returns a message when accessed
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
