const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/home', (req,res) => {
    res.render('home');
});

router.get('/clientes', (req,res) => {
    res.render('clientes');
});

router.get('/productos', (req,res) => {
    res.render('productos');
});

router.get('/proveedor', (req,res) => {
    res.render('proveedor');
});

router.get('/entradas_aux', (req,res) => {
    res.render('entradas_aux');
});

router.get('/salidas_aux', (req,res) => {
    res.render('salidas_aux');
});

router.get('/pedidos', (req,res) => {
    res.render('pedidos');
});

router.get('/comprar', (req,res) => {
    res.render('comprar');
});

module.exports = router;