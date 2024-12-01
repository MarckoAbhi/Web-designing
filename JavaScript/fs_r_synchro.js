const fs = require('fs');

// Open file for reading (synchronously)
const fd = fs.openSync('file.txt', 'r');

// Create a buffer to store read data
const buffer = Buffer.alloc(1024); // Allocate 1KB of memory

// Read the file into the buffer
const bytesRead = fs.readSync(fd, buffer, 0, buffer.length, 0);

console.log(`Read ${bytesRead} bytes: ${buffer.toString('utf8', 0, bytesRead)}`);

// Close the file
fs.closeSync(fd);
