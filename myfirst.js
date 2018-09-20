var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write(req.url);
    res.write("A data atual é: " + dt.myDateTime() + '\n')
    res.end();
}).listen(8080);
console.log('Servidor iniciado em localhost:8080. Ctrl + C para encerrar...');