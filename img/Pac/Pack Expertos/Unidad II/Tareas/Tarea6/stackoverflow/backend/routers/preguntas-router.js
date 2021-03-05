var express = require('express');
var router = express.Router();
var pregunta = require('../models/pregunta');
var mongoose = require('mongoose');

// Obtener preguntas con informacion de usuario
router.get('/', function (req, res) {
    pregunta.aggregate([{
                $lookup: {
                    from: "usuarios",
                    localField: "idUsuario",
                    foreignField: "_id",
                    as: "usuario"
                }
            },
            {
                $project: {
                    _id: true,
                    titulo: true,
                    descripcion: true,
                    fecha: true,
                    votos: true,
                    vistas: true,
                    hashtags: true,
                    numeroRespuestas: {
                        $cond: {
                            if: {
                                $isArray: "$respuestas"
                            },
                            then: {
                                $size: "$respuestas"
                            },
                            else: "NA"
                        }
                    },
                    "usuario._id": true,
                    "usuario.nombre": true,
                    "usuario.urlImagen": true
                }
            }
        ])
        .then(result => {
            res.send(result);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
});

// Obtener respuestas a una pregunta
router.get('/:idPregunta/respuestas', function (req, res) {
    pregunta.aggregate([{
                $lookup: {
                    from: "usuarios",
                    localField: "respuestas.idUsuario",
                    foreignField: "_id",
                    as: "usuario"
                }
            },
            {
                $match: {
                    _id: mongoose.Types.ObjectId(req.params.idPregunta)
                }
            },
            {
                $project: {
                    respuestas: true,
                    "usuario._id": true,
                    "usuario.nombre": true,
                    "usuario.urlImagen": true
                }
            }
        ]).then(result => {
            res.send(result[0]);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
})

// Guardar pregunta
router.post('/', function (req, res) {
    const nuevaPregunta = new pregunta({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        fecha: "12/12/2012",
        votos: 0,
        vistas: 0,
        hashtags: req.body.hashtags,
        idUsuario: req.body.idUsuario,
        respuestas: []
    });

    nuevaPregunta.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});

module.exports = router;