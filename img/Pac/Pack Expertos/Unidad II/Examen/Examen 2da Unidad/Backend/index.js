var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var database = require('./modules/database');
var usuariosRouter = require('./routes/usuarios-router');
var tiktokRouter = require('./routes/tiktoks-router');
var hashtagsRouter = require('./routes/hashtags-router');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/usuarios', usuariosRouter);
app.use('/tiktoks', tiktokRouter);
app.use('/hashtags', hashtagsRouter);

app.listen(8888, () => {
    console.log('Servidor del backend levantado en 8888');
});