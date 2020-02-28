var data = new Date();


var hora = data.getHours();
hora = hora - 3;
var min = data.getMinutes();
min = min -3;

var express = require('express');
var app = express();

app.use((req, res, next) => { 
    if (req.headers["x-forwarded-proto"] == "http") 
        res.redirect(`https://${req.headers.host}${req.url}`); 
    else 
        next(); 
});

app.get('/', function (req, res) {
  res.send('Hello world! ' + hora + ':' + min);
});

app.listen(3000, function () {
  console.log('Porta 3000 funcionando!');
});

