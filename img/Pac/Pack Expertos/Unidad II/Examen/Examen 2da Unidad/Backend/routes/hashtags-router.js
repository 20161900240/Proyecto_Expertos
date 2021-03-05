var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var hashtag = require('../models/hashtag');

// Obtener hashtags
router.get('/', function (req, res) {
    hashtag.find({}, {}).then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
})

// Verificar nuevo hashtag
router.post('/', function (req, res) {
    
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