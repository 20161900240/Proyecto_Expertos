var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var SECRET_KEY = 'secretkey12345678';
var usuario = require('../models/usuario');

// Obtener usuarios
router.get('/', function (req, res) {
    usuario.find({}, {
        usuario: true,
        nombre: true,
        urlImagen: true,
        siguiendo: true
    }).then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
})

// Obtener usuario logueado
router.get('/:idUsuario', verifyToken, function (req, res) {
    usuario.findOne({
            _id: mongoose.Types.ObjectId(req.params.idUsuario)
        }, {
            usuario: true
        })
        .then(result => {
            res.send(result);
            res.end();
        }).catch(error => {
            res.send(error);
            res.end();
        });
});

// Obtener ID de token
router.get('/tokenID', verifyToken, function (req, res) {
    res.send({
        text: 'This is your token ID',
        id: req._id
    });
});

// Loguear usuario
router.post('/login', function (req, res) {
    usuario.findOne({
            usuario: req.body.usuario,
            password: req.body.password
        }, {
            _id: true,
            usuario: true
        })
        .then(result => {
            const accessToken = jwt.sign({
                _id: result._id
            }, SECRET_KEY);
            const dataEnviar = {
                idUsuario: result._id,
                accessToken: accessToken
            }
            res.status(200).send({
                mensaje: 'OK',
                data: dataEnviar
            });
            res.end();

        })
        .catch(error => {
            res.status(401).send({
                mensaje: 'No-Autorizado: Datos incorrectos'
            });
            res.end();
        });
});

// Crear nuevo usuario
router.post('/', function (req, res) {
    const nuevoUsuario = new usuario({
        usuario: req.body.usuario,
        password: req.body.password,
        nombre: req.body.nombre,
        urlImagen: req.body.urlImagen,
        seguidores: [],
        siguiendo: []
    });

    nuevoUsuario.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
})

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