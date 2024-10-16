let fs = require('fs');
fs.writeFile('mycode.docx','This is sample data',(err)=>{
    if(err) throw err;
    console.log('Task Done.')
});