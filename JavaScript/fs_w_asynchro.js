const fs = require('fs');

// Open file for writing (asynchronously)
fs.open('file.txt', 'w', (err, fd) => {
  if (err) {
    console.error('Error opening file:', err);
    return;
  }

  // Write data to the file
  const data = 'Hello, World!';
  fs.write(fd, data, 0, data.length, 0, (err, bytesWritten, buffer) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`Written ${bytesWritten} bytes.`);
    }

    // Close the file after writing
    fs.close(fd, (err) => {
      if (err) {
        console.error('Error closing file:', err);
      } else {
        console.log('File closed successfully.');
      }
    });
  });
});
