// Import express module
const express = require('express');

// Create an instance of an Express app
const app = express();

// Define the root URL route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Define the /about route
app.get('/about', (req, res) => {
  res.send('This is the About Page!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
