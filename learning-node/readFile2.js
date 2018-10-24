var http = require('http');
var fs = require('fs');

//write out numbers
function writeNumbers(res){

    var counter = 0;

    //increment global, write to client
    for(var i = 0; i < 100; i++){
        counter++;
        res.write(counter.toString() + '\n');
    }
}

//create http server
http.createServer(function (req, res){

    var query = require('url').parse(req.url, true).query;
    var app = query.file + ".txt";

    //content header
    res.writeHead(200, {'Content-Type': 'text/plain'});

    //write header
    writeNumbers(res);

    //timer to open file and read contents
    setTimeout(function(){

        console.log('opening ' + app);

        //open and read in file contents
        fs.readFile(app, 'utf8', function(err, data){
            if(err){
                res.write('Could not find or open file for reading\n');
            } else {
                res.write(data);
            }

            //response is done
            res.end();
        });
    }, 2000);
}).listen(3000);

console.log('Server running at 3000');