var express = require('express');
var router = express.Router();
var categoria = require('../models/categoria');
var mongoose = require('mongoose');

// Obtener categorias
router.get('/', function (req, res){
    categoria.find({},{}).then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    })
})

// Guardar nueva categoria
router.post('/', function (req, res){
    const nuevaCategoria = new categoria({
        nombreCategoria: req.body.nombreCategoria,
        descripcion: req.body.descripcion,
        color: req.body.color,
        icono: `../assets/images/${req.body.icono}`,
        empresas: []  
    });

    nuevaCategoria.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    })
})

module.exports = router;