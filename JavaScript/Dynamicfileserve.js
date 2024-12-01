const http = require('http');

const server = http.createServer((req, res) => {
  // Serve dynamic content based on the URL
  if (req.url === '/dynamic') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Generate dynamic content
    const dynamicContent = `
      <html>
        <head><title>Dynamic Page</title></head>
        <body>
          <h1>This content was generated dynamically!</h1>
          <p>Current date and time: ${new Date().toLocaleString()}</p>
        </body>
      </html>
    `;

    res.end(dynamicContent); // Send dynamic content
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server is serving dynamic content on http://localhost:3000/dynamic');
});
