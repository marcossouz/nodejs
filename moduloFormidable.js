var http = require('http');
var formidable = require('formidable');
var mv = require('mv');

http.createServer(function(req, res){

    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            var oldpath = files.filetoupload.path;
            var newpath = '/mnt/c/Users/marco/Documents/nodejs/nodejs/' +  files.filetoupload.name;
            mv(oldpath, newpath, function(err){
                if(err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        return res.end();
    }
    
}).listen(8080);

console.log('servidor de arquivo rodando...');