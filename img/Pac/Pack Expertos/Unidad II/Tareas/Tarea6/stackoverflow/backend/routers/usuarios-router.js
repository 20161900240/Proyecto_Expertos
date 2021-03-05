var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');
var mongoose = require('mongoose');

// Obtener usuarios
router.get('/', function (req, res) {
    usuario.find({}, {
            _id: true,
            nombre: true,
            urlImagen: true
        })
        .then(result => {
            res.send(result);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
});

// Agregar preguntas a usuario
router.post('/:idUsuario/preguntas', function (req, res) {
    usuario.updateOne({
        _id: mongoose.Types.ObjectId(req.params.idUsuario)
    }, {
        $push: {
            preguntas: {
                _id: mongoose.Types.ObjectId(req.body.idPregunta),
                titulo: req.body.titulo
            }
        }
    }).then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    })
});

module.exports = router;