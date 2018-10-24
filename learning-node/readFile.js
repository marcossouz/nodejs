//load http module
var http = require('http');
var fs = require('fs');

//create http server
http.createServer(function(req, res){

    //Open and read in hello.js
    fs.readFile('hello.js', 'utf8', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        if(err){
            res.write('Could not find or open file for reading\n');
        } else {
            //if nor error, write JS file to client
            res.write(data);
        }
        res.end();
    });
}).listen(3000, function(){ console.log('bound to port 3000');});

console.log('Server running on 3000');