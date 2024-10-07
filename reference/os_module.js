const os = require("os");

// Platform : to get the os name
console.log(os.platform());

// CPU Architecture
console.log(os.arch());

// CPU Core info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home directory
console.log(os.homedir());

// Up time: amount of time system has been up in seconds
console.log(os.uptime())