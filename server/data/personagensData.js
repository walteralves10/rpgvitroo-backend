const db = require('../infra/database');

exports.getPersonagens = () => {
    return db.query('SELECT * FROM personagens');
};

exports.getPersonagensUnicaMesa = (fk_id) => {
    return db.query('SELECT * FROM personagens WHERE fk_id_mesa_personagem = $1', [fk_id]);
};

exports.postPersonagens = (personagem) => {
    return db.query('INSERT INTO personagens(nome_personagem, ponto_vida_total_personagem, ponto_vida_atual_personagem, forca_personagem, destreza_personagem, constituicao_personagem, inteligencia_personagem, sabedoria_personagem, carisma_personagem, descricao_personagem, fk_id_mesa_personagem) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', 
    [personagem.nome_personagem , personagem.ponto_vida_total_personagem , 
     personagem.ponto_vida_atual_personagem , personagem.forca_personagem , 
     personagem.destreza_personagem , personagem.constituicao_personagem , 
     personagem.inteligencia_personagem , personagem.sabedoria_personagem , 
     personagem.carisma_personagem , personagem.descricao_personagem , 
     personagem.fk_id_mesa_personagem]);
};

//prisma