var fs = require('fs');

fs.writeFile('file3.txt', 'This is my text',function(err){
    if(err) throw err;
    console.log('replaced!');
})