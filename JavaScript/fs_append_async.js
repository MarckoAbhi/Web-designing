const fs = require('fs');

// Append data to the file (asynchronously)
fs.appendFile('file.txt', '\nAppended asynchronously.', (err) => {
  if (err) {
    console.error('Error appending data:', err);
  } else {
    console.log('Data appended successfully.');
  }
});
