const express = require('express');
const router = express.Router();
const mesas_personagensService = require('../service/mesas_personagensService');

router.get('/mesas_personagens/:id', async (req, res, next)=> {
    try {
        const dados = await mesas_personagensService.getMesas_personagens(req.params.id);
        res.json(dados);
    } catch (e) {
        next(e);
    }
});

router.post('/mesas_personagens', async (req, res, next)=> {
    const dados = req.body;
    try {
        const novoDado = await mesas_personagensService.postMesas_personagens(dados);
        res.status(201).json(novoDado);
    } catch (e) {
        next(e);
    }
});

// router.put('/mesas_personagens', async (req, res, next)=> {

// });

router.delete('/mesas_personagens/:id', async (req, res, next)=> {
    try {
        await mesas_personagensService.deleteMesas_personagens(req.params.id);
        res.end();
    } catch (e) {
        next(e);
    }
});

module.exports = router;