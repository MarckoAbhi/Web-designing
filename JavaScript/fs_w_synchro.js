const fs = require('fs');

// Open file for writing (synchronously)
const fd = fs.openSync('file.txt', 'w'); // 'w' flag means write mode

// Write data to the file
const bytesWritten = fs.writeSync(fd, 'Hello, World!', 0, 'Hello, World!'.length, 0);

console.log(`Written ${bytesWritten} bytes.`);

// Close the file
fs.closeSync(fd);
