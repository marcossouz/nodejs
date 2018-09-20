var fs = require('fs');

fs.rename('file.txt', 'fileRenamed.txt', function(err){
    if(err) throw err;
    console.log('File Renamed!');
})