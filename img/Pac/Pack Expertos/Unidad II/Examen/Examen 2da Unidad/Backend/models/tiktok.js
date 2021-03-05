var mongoose = require('mongoose');
var esquemaTiktok = new mongoose.Schema({
    titulo: String,
    fecha: String,
    video: String,
    tituloCancion: String,
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    },
    likes: Number,
    shares: Number,
    comentarios: Array,
    hashtags: Array
});

module.exports = mongoose.model('tiktoks', esquemaTiktok);