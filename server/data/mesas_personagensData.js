const db = require('../infra/database');

exports.getMesas_personagens = (id) => {
    return db.query('SELECT * FROM lista_personagens WHERE id_mesa = $1', [id]);
};

exports.postMesas_personagens = (dados) => {
    //console.log(dados);
    return db.none('INSERT INTO mesas_personagens(id_mesa, id_personagem) VALUES ($1, $2)', 
     [dados.id_mesa, dados.id_personagem]);
};

// exports.putMesas_personagens = () => {
//     return db.one('')
// };

exports.deleteMesas_personagens = (id_mesa) => {
    return db.none('DELETE FROM mesas_personagens WHERE id_mesa = $1', [id_mesa]);
};