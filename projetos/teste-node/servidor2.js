var http  = require('http');
var porta = 3000;
var ip    = "localhost";
var server;

server = http.createServer((req,res) =>
    {console.log("Recebendo Request!");
    res.writeHead(200,{'Content-type':'text/html'});
    res.end('<html><body><h1>Listagem de Produtos</h1></body></html>');
});

console.log("Server running at http://" + ip + ":" + porta + "/");

server.listen(porta,ip);