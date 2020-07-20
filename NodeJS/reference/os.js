const os = require("os");

// get os platform
console.log(os.platform()); // win32
console.log(os.arch()); // x64
// console.log(os.cpus()); // all cores info
console.log(os.freemem()); // free mem
console.log(os.totalmem()); // total mem
console.log(os.homedir()); //homedir
console.log(os.uptime()); // #seconds
