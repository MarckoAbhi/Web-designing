const fs = require('fs');

// Append data to the file (synchronously)
fs.appendFileSync('file.txt', '\nAppended data.');
console.log('Data appended successfully.');
