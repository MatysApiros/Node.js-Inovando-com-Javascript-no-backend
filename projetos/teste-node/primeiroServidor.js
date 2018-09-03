var http = require('http');

var server = http.createServer ((requisicao,resposta) => resposta.end('<html><body><h1>Lista de Produtos</h1></body></html>'));

server.listen(3000);

console.log("Servidor está rodando!")