var mongoose = require('mongoose');
var esquemaUsuario = new mongoose.Schema(
    {
        nombre: String,
        apellido: String,
        ordenes: Array
    }
);

module.exports = mongoose.model('usuarios', esquemaUsuario);