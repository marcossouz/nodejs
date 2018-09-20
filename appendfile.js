var fs = require('fs');

fs.appendFile('file.txt', 'Hello content!', function(err){
    if(err) throw err;
    console.log('Saved');
});