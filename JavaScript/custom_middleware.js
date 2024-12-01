const express = require('express');
const app = express();
const port = 3000;

// Custom Middleware: Log request method, URL, and timestamp
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
  next(); // Pass control to the next middleware or route handler
};

// Apply the middleware globally (for all routes)
app.use(logRequest);

// Sample route to test the middleware
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Us');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



// Authentication middleware
const checkAuthentication = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).send('Authorization header required');
  }
  // Proceed if the header exists
  next();
};

// Apply authentication middleware to a specific route
app.get('/profile', checkAuthentication, (req, res) => {
  res.send('Profile Page');
});
