const fs = require('fs');

// Delete the file (synchronously)
try {
  fs.unlinkSync('file.txt');
  console.log('File deleted successfully.');
} catch (err) {
  console.error('Error deleting file:', err);
}
