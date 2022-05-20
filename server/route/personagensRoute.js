const express = require('express');
const router = express.Router();
const personagemService = require('../service/personagensService');
const mesas_personagensService = require('../service/mesas_personagensService');

router.get('/personagens', async function(req, res, next){ 
    try {
        const personagens = await personagemService.getPersonagens();
        res.json(personagens);        
    } catch (e) {
        next(e);
    }
});

router.get('/personagens/:id_mesa', async (req, res, next) => {
    try {
        const personagem = await personagemService.getPersonagensUnicaMesa(req.params.id_mesa);
        res.json(personagem);        
    } catch (e) {
        next(e);
    }
});

router.post('/personagens/:id_mesa', async (req, res, next) => {
    const personagem = req.body; 
    try {
        const novoPersonagem = await personagemService.postPersonagens(personagem, req.params.id_mesa);
        console.log(novoPersonagem);
        res.status(201).json(novoPersonagem);        
    } catch (e) {
        next(e);
    }
});

router.put('/personagens/:id', async (req, res, next) => {
    const personagem = req.body;
    try {
        await personagemService.putPersonagens(req.params.id, personagem);
        res.status(204).end();           
    } catch (e) {
        next(e);
    }
});

router.delete('/personagens/:id_pers/:id_mesa', async (req, res, next) => {
    try {
        await mesas_personagensService.deleteMesas_personagens(req.params.id_pers, req.params.id_mesa);
        await personagemService.deletePersonagens(req.params.id_pers);
        res.status(204).end();        
    } catch (e) {
        next(e);
    }
});

module.exports = router;