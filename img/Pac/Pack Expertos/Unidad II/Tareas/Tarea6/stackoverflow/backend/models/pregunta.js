var mongoose = require('mongoose');
var esquemaPregunta = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    fecha: String,
    votos: Number,
    vistas: Number,
    hashtags: Array,
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    },
    respuestas: Array
});

module.exports = mongoose.model('preguntas', esquemaPregunta);