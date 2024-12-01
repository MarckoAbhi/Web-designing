const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());  // To parse incoming JSON request bodies

// Abstracted Logging Middleware
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
  next();
};

// Abstracted Authorization Middleware
const checkAuthorization = (req, res, next) => {
  // Simulate authorization check
  if (req.headers.authorization === 'Bearer secret-token') {
    next();  // User is authorized
  } else {
    res.status(403).send('Forbidden: Invalid authorization token');
  }
};

// Abstracted Data Validation Middleware
const validateUserData = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send('Bad Request: Name and email are required');
  }
  next();  // Proceed if validation passes
};

// Callback Chaining Example: Handling POST requests to create a user
const createUser = (req, res) => {
  const { name, email } = req.body;
  // Simulate user creation
  const newUser = { id: Date.now(), name, email };
  res.status(201).json(newUser);
};

// Chaining Middleware Functions
app.post('/users', 
  logRequest,                  // 1st Middleware: Log request
  checkAuthorization,           // 2nd Middleware: Authorization check
  validateUserData,            // 3rd Middleware: Data validation
  createUser                   // 4th Callback: Create user and send response
);

// Starting the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
