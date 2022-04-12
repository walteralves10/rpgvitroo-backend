const express = require('express');
const router = express.Router();
const mesasService = require('../service/mesasService');

router.get('/mesas', async function(req, res, next){
    const mesas = await mesasService.getMesas();
    res.json(mesas);
});

router.post('/mesas', async function(req, res, next){
    const mesa = req.body;
    const novaMesa = await mesasService.postMesas(mesa);
    //console.log(novaMesa);
    res.json(novaMesa);
});

module.exports = router;