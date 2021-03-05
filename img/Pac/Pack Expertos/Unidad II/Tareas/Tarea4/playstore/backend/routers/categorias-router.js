var express = require('express');
var router = express.Router();
var categoria = require('../models/categoria');
var mongoose = require('mongoose');

// Obtener categorias de aplicaciones
router.get('/', function (req, res) {
    categoria.find({}, {
            _id: true,
            nombreCategoria: true
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

// Obtener aplicaciones por categoria
router.get('/:idCategoria/aplicaciones', function (req, res) {
    categoria.find({
            _id: mongoose.Types.ObjectId(req.params.idCategoria)
        }, {
            aplicaciones: true
        })
        .then(result => {
            res.send(result[0].aplicaciones);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
});

// Obtener detalle de una aplicacion
router.get('/:idCategoria/aplicaciones/:idAplicacion', function (req, res) {
    categoria.find({
            _id: mongoose.Types.ObjectId(req.params.idCategoria),
            "aplicaciones._id": mongoose.Types.ObjectId(req.params.idAplicacion)
        }, {
            "aplicaciones.$": true
        })
        .then(result => {
            res.send(result[0].aplicaciones[0]);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
});

// Guardar nuevo comentario de una aplicacion
router.post('/:idCategoria/aplicaciones/:idAplicacion/comentarios', function (req, res) {
    categoria.update({
        _id: mongoose.Types.ObjectId(req.params.idCategoria),
        "aplicaciones._id": mongoose.Types.ObjectId(req.params.idAplicacion)
    }, {
        $push: {
            "aplicaciones.$.comentarios": {
                _id: mongoose.Types.ObjectId(),
                comentario: req.body.comentario,
                calificacion: req.body.calificacion,
                fecha: req.body.fecha,
                usuario: req.body.usuario
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

// Guardar nueva aplicacion
router.post('/:idCategoria/aplicaciones', function (req, res) {
    categoria.update({
        _id: mongoose.Types.ObjectId(req.params.idCategoria)
    }, {
        $push: {
            aplicaciones: {
                _id: mongoose.Types.ObjectId(),
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                icono: req.body.icono,
                instalada: false,
                app: "app/demo.apk",
                calificacion: req.body.calificacion,
                descargas: req.body.descargas,
                precio: req.body.precio,
                desarrollador: req.body.desarrollador,
                imagenes: [
                    "img/app-screenshots/1.webp",
                    "img/app-screenshots/2.webp",
                    "img/app-screenshots/3.webp"
                ],
                comentarios: []
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