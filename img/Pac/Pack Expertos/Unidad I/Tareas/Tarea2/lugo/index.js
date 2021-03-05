var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(4300, function(){
    console.log('Servidor levanto');
})