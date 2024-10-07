const path = require("path")

// Base file name
console.log(path.basename(__filename))

// Directory name
console.log(path.dirname(__filename))

// Fle extension
console.log(path.extname(__filename))

// Path Object
console.log(path.parse(__filename))

// Concatenate paths

console.log(path.join(__dirname, 'test', 'hello.html'))

