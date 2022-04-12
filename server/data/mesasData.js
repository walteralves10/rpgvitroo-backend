const db = require('../infra/database');

exports.getMesas = () => {
    return db.query('SELECT * FROM mesas');
}; 

exports.getMaxID = () => {
    return db.query('SELECT MAX(id_mesa) FROM mesas');
}

exports.postMesas = (mesa) => {
    return db.query('INSERT INTO mesas(nome_mesa) VALUES ($1) returning *', [mesa.nome_mesa]);
};