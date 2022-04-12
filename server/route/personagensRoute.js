const express = require('express');
const router = express.Router();
const personagemService = require('../service/personagensService');

router.get('/personagens', async function(req, res, next){ 
    const personagens = await personagemService.getPersonagens();
    res.json(personagens);
});

router.get('/personagens/:id_mesa', async (req, res, next) => {
    const fk_id = req.params.id_mesa;
    const personagem = await personagemService.getPersonagensUnicaMesa(fk_id);
    res.json(personagem);
});

router.post('/personagens', async (req, res, next) => {
    const personagem = req.body; 
    const novoPersonagem = await personagemService.postPersonagens(personagem);
    res.json(novoPersonagem);
});

module.exports = router;