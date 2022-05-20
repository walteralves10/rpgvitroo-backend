const db = require('../infra/database');

exports.getPersonagens = () => {
    return db.query('SELECT * FROM personagens');
};

exports.getPersonagensUnicaMesa = (fk_id) => {
    return db.query('SELECT * FROM personagens WHERE fk_id_mesa = $1', [fk_id]);
};

exports.postPersonagens = (personagem) => {
    return db.one('INSERT INTO personagens(nome, ponto_vida_total, ponto_vida_atual, forca, destreza, constituicao, inteligencia, sabedoria, carisma, descricao) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning id ', 
    [personagem.nome , personagem.ponto_vida_total , 
     personagem.ponto_vida_atual , personagem.forca , 
     personagem.destreza , personagem.constituicao , 
     personagem.inteligencia , personagem.sabedoria , 
     personagem.carisma , personagem.descricao], a => a.id);
};

exports.putPersonagens = (id, personagem) => {
    return db.none('UPDATE personagens SET nome=$1, ponto_vida_total=$2, ponto_vida_atual=$3, forca=$4, destreza=$5, constituicao=$6, inteligencia=$7, sabedoria=$8, carisma=$9, descricao=$10 WHERE id = $11',
    [personagem.nome , personagem.ponto_vida_total , 
    personagem.ponto_vida_atual , personagem.forca , 
    personagem.destreza , personagem.constituicao , 
    personagem.inteligencia , personagem.sabedoria , 
    personagem.carisma , personagem.descricao, id]);
}

exports.deletePersonagens = (id) => {
    return db.none('DELETE FROM personagens WHERE id = $1', [id]);
}

//prisma