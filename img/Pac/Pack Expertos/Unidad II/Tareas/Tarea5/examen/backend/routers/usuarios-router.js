var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario')
var mongoose = require('mongoose');

// Obtener usuarios
router.get('/', function (req, res) {
    usuario.find({}, {
        _id: true,
        nombre: true,
        apellido: true
    }).then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    })
})

// Obtener un usuario
router.get('/:idUsuario', function (req, res) {
    usuario.find({
            _id: req.params.idUsuario
        }, {})
        .then(result => {
            res.send(result[0]);
            res.end();
        }).catch(error => {
            res.send(error);
            res.end();
        })
})

// Guardar orden de un usuario
router.post('/:idUsuario/ordenes', function (req, res) {
    usuario.update({
            _id: mongoose.Types.ObjectId(req.params.idUsuario)
        }, {
            $push: {
                ordenes: {
                    nombreProducto: req.body.nombreProducto,
                    descripcion: req.body.descripcion,
                    cantidad: req.body.cantidad,
                    precio: req.body.precio
                }
            }
        })
        .then(result => {
            res.send(result);
            res.end();
        }).catch(error => {
            res.send(error);
            res.end();
        })
})

module.exports = router;