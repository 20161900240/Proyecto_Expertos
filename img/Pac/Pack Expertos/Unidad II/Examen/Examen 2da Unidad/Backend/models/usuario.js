var mongoose = require('mongoose');
var esquemaUsuario = new mongoose.Schema({
    usuario: String,
    password: String,
    nombre: String,
    urlImagen: String,
    seguidores: Array,
    siguiendo: Array
});

module.exports = mongoose.model('usuarios', esquemaUsuario);