const express = require('express');
const router = express.Router();
const mesasService = require('../service/mesasService');

router.get('/mesas', async function(req, res, next){
    try {
        const mesas = await mesasService.getMesas();
        res.json(mesas);
    } catch (e) {
        next(e);
    }
});

router.post('/mesas', async function(req, res, next){
    const mesa = req.body;
    try {
        const novaMesa = await mesasService.postMesas(mesa);
        console.log(novaMesa);
        res.status(201).json(novaMesa);
    } catch (e) {
        next(e);
    }
});

router.put('/mesas/:id', async (req, res, next)=> {
    const mesa = req.body;
    try {
        await mesasService.putMesas(req.params.id, mesa);
        res.status(204).end();
    } catch (e) {
        next(e);
    }
});

router.delete('/mesas/:id', async (req, res, next)=> {
    try {
        await mesasService.deleteMesas(req.params.id);
        res.status(204).end();
    } catch (e) {
        next(e);
    }
});

module.exports = router;