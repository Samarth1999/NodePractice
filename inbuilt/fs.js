let fs = require('fs');

// fs.writeFile('mycode.txt','This is sample data',(err)=>{
//     if(err) throw err;
//     console.log('Task Done.')
// });

//  fs.appendFile('myText.txt', 'Code for Node FS \n', (err)=>{
//     if(err) throw err;
//     console.log('File Appended');

//  })

    // fs.readFile('mycode.txt','utf-8',(err, data) => {   //utf-8 is a standard for incodding the file data
    //     if (err) throw err;
    //     console.log(data);
    // })

    //let data  = fs.readFileSync('city.json',{encoding:'utf-8',flag:'r'})
    // console.log(data)
    
    // let data1  = fs.readFileSync('myText.txt',{encoding:'utf-8',flag:'r'})
    // console.log(data1)
    
    
    // fs.unlink('mycode.txt',(err)=>{    //for delete file
    //     if(err) throw err;
    //     console.log('file deleted')
    // })
    
    fs.rename('myText.xml','myText.txt',(err)=>{  //for rename file
        if(err) throw err;
        console.log('file renamed')
    })