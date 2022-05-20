const db = require('../infra/database');

exports.getMesas = () => {
    return db.query('SELECT * FROM mesas');
}; 

exports.getMaxID = () => {
    return db.query('SELECT MAX(id) FROM mesas');
}

exports.postMesas = (mesa) => {
    return db.query('INSERT INTO mesas(nome) VALUES ($1) returning *', [mesa.nome]);
};

exports.putMesas = (id, mesa) => {
    return db.none('UPDATE mesas SET nome = $1 WHERE id = $2', [mesa.nome, id]);
};

exports.deleteMesas = (id) => {
    return db.none('DELETE FROM mesas WHERE id = $1', [id]);
};