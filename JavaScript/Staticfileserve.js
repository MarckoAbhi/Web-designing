const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html'); // Replace with your static file path

  // Read the static file asynchronously
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data); // Send the content of the static file
    }
  });
});

server.listen(3000, () => {
  console.log('Server is serving static file on http://localhost:3000');
});
