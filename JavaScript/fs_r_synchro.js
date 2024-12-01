const fs = require('fs');

try {
  const fd = fs.openSync('path/to/file.txt', 'r');
  console.log('File opened successfully. File descriptor:', fd);

  // Perform operations with the file descriptor (fd) if needed
  fs.closeSync(fd);
  console.log('File closed successfully.');
} catch (err) {
  console.error('Error opening file:', err);
}
