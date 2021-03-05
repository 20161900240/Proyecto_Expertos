var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var SECRET_KEY = 'secretkey12345678';
var tiktok = require('../models/tiktok');

// Obtener tiktoks con aggregate
router.get('/', function (req, res) {
    tiktok.aggregate([{
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
                    fecha: true,
                    video: true,
                    tituloCancion: true,
                    "usuario._id": true,
                    "usuario.usuario": true,
                    "usuario.nombre": true,
                    "usuario.urlImagen": true,
                    likes: true,
                    shares: true,
                    numeroComentarios: {
                        $cond: {
                            if: {
                                $isArray: "$comentarios"
                            },
                            then: {
                                $size: "$comentarios"
                            },
                            else: "NA"
                        }
                    },
                    hashtags: true
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

// Obtener comentarios de un tiktok
router.get('/:idTiktok/comentarios', function (req, res) {
    tiktok.aggregate([{
                $lookup: {
                    from: "usuarios",
                    localField: "comentarios.usuario",
                    foreignField: "usuario",
                    as: "usuario"
                }
            },
            {
                $match: {
                    _id: mongoose.Types.ObjectId(req.params.idTiktok)
                }
            },
            {
                $project: {
                    comentarios: true,
                    "usuario.usuario": true,
                    "usuario.urlImagen": true
                }
            }
        ])
        .then(result => {
            res.send(result[0]);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
})

// Guardar Tiktok
router.post('/', verifyToken, function (req, res) {
    const nuevoTiktok = new tiktok({
        titulo: req.body.tituloCancion,
        fecha: "12/12/2012",
        video: req.body.video,
        tituloCancion: req.body.tituloCancion,
        idUsuario: mongoose.Types.ObjectId(req.body.idUsuario),
        likes: 0,
        shares: 0,
        comentarios: [],
        hashtags: req.body.hashtags
    });

    nuevoTiktok.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
})

// Guardar comentario
router.post('/:idTiktok/comentarios', verifyToken, function (req, res) {
    tiktok.update({
            _id: mongoose.Types.ObjectId(req.params.idTiktok)
        }, {
            $push: {
                comentarios: {
                    _id: mongoose.Types.ObjectId(),
                    usuario: req.body.usuario,
                    comentario: req.body.comentario
                }
            }
        })
        .then(result => {
            res.send(result);
            res.end();
        }).catch(error => {
            res.send(error);
            res.end();
        });
});

module.exports = router;

// Verificar Token
function verifyToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        if (bearerToken === null) {
            return res.status(401).send('No-Autorizado');
        }
        const payload = jwt.verify(bearerToken, SECRET_KEY);
        req._id = payload._id;
        next();
    } else {
        res.status(401).send('No-Autorizado');
    }
}