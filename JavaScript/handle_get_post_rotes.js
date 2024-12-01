const express = require('express');
const app = express();
const port = 3000;

// Mock data for users (you can replace this with a database in a real application)
let users = [
  { id: 1, name: 'Abhi Kumar' },
  { id: 2, name: 'Aman Kumar' },
];

// Middleware to parse JSON bodies
app.use(express.json());

// GET /users - Get all users
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// GET /users/:id - Get a user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// POST /users - Create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  if (!newUser.name) {
    return res.status(400).send('Name is required');
  }
  
  newUser.id = users.length + 1; // Assign a new ID (in a real app, the database would handle this)
  users.push(newUser);
  res.status(201).json(newUser);
});

// DELETE /users/:id - Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.status(200).json(deletedUser);
  } else {
    res.status(404).send('User not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
