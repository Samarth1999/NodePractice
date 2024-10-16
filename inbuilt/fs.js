let fs = require('fs');
fs.writeFile('mycode.txt','This is sample data',(err)=>{
    if(err) throw err;
    console.log('Task Done.')
});