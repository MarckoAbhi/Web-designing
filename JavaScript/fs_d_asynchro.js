const fs = require('fs');

// Delete the file (asynchronously)
fs.unlink('file.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('File deleted successfully.');
  }
});
