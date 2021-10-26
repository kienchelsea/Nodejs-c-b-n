var http = require("http")
var fs = require("fs")

http.createServer(function(req, res){
    res.writeHead(200, {"Content-type" : "application/json"});
    var obj = {
        ho : "Lê",
        ten : "Kiên",
        namsinh: 2001
    };
    res.end(JSON.stringify(obj));
}).listen(2222);