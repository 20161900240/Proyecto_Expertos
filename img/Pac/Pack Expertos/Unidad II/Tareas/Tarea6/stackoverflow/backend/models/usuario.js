var mongoose = require('mongoose');
var esquemaUsuario = new mongoose.Schema({
    nombre: String,
    urlImagen: String,
    preguntas: Array
});

module.exports = mongoose.model('usuarios', esquemaUsuario);