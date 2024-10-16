let os = require('os');
console.log(os.platform());
console.log(os.arch()) //x64
console.log(os.cpus().length+" core") // it returns core
console.log(os.freemem()) //returns free memory in bytes
console.log(os.uptime()) //1266518 sec