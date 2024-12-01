// Import express module
const express = require('express');

// Create an instance of an Express app
const app = express();

// Dynamic route to capture a user's ID
app.get('/user/:id', (req, res) => {
  // Access the dynamic parameter via req.params
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});

// Dynamic route to capture a blog post's ID
app.get('/post/:postId', (req, res) => {
  // Access the dynamic parameter via req.params
  const postId = req.params.postId;
  res.send(`Post ID is: ${postId}`);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
