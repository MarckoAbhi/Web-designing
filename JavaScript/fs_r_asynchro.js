const fs = require('fs');

fs.open('path/to/file.txt', 'r', (err, fd) => {
  if (err) {
    console.error('Error opening file:', err);
    return;
  }
  console.log('File opened successfully. File descriptor:', fd);

  // Perform operations with the file descriptor (fd) if needed
  fs.close(fd, (err) => {
    if (err) {
      console.error('Error closing file:', err);
    } else {
      console.log('File closed successfully.');
    }
  });
});
