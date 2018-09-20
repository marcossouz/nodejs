var fs = require('fs');

fs.appendFile('file.txt', 'this is my text', function(err){
    if(err) throw err;
    console.log('Updated!');
})