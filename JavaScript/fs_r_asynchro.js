const fs = require('fs');

// Open file for reading (asynchronously)
fs.open('file.txt', 'r', (err, fd) => {
  if (err) {
    console.error('Error opening file:', err);
    return;
  }

  // Create a buffer to store read data
  const buffer = Buffer.alloc(1024); // Allocate 1KB of memory

  // Read the file into the buffer
  fs.read(fd, buffer, 0, buffer.length, 0, (err, bytesRead, buffer) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log(`Read ${bytesRead} bytes: ${buffer.toString('utf8', 0, bytesRead)}`);
    }

    // Close the file after reading
    fs.close(fd, (err) => {
      if (err) {
        console.error('Error closing file:', err);
      } else {
        console.log('File closed successfully.');
      }
    });
  });
});
