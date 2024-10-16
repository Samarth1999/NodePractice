let http = require('http');

let server= http.createServer((req,res)=>{
    res.write('<h1>This is Responce from Server');
    res.end();
})

server.listen(7600);

