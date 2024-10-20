const fs = require("fs");
const path = require("path");

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
  if (err) throw err
  console.log('Folder created...')
});

fs.rmdir("/test2", {}, (err) => {
  if(err) throw err
  console.log("Folder 2 removed")
})

// Write or create a new file
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'), 
  'Hello world! ', 
  (err) => { 
  if (err) throw err
  console.log('File written to...');

  // Fie append
  fs.appendFile(
    path.join(__dirname, '/test', 'hello.txt'), 
    'I love Node.js.', 
    (err) => {
    if (err) throw err
    console.log('File written to...')
  });
});

// Read file

fs.readFile(
  path.join(__dirname, '/test', 'hello.txt'), 
  'utf8', 
  (err, data) => {
  if (err) throw err
  console.log(data)
});

// Rename file

// fs.rename(
//   path.join(__dirname, '/test', 'hello.txt'), 
//   path.join(__dirname, '/test', 'helloWorld.txt'), 
//   (err) => {
//   if (err) throw err
//   console.log("File renamed...")
// });