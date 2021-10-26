var express = require('express');
const app = express();

var server = require("http").createServer(app);
server.listen(3000);

app.get("/", function(req, res){
    // res.send("<font color = blue>London is blue</font>")
    res.sendFile(__dirname + "/index.html")
});
app.get("/introduce.abx", function(req, res){
    res.send("Chelsea is very strong");
});
app.get("/total/:number1/:number2", function(req, res){
    var n = req.params.number1;
    n = parseInt(n);

    var x = req.params.number2;
    x = parseInt(x);
    var tong = n + x;
    res.send('<h1>' +tong +'</h1>');
});