const personagensData = require('../data/personagensData');

exports.getPersonagens = () => {
    return personagensData.getPersonagens();
};

exports.getPersonagensUnicaMesa = (fk_id) => {
    return personagensData.getPersonagensUnicaMesa(fk_id);
};

exports.postPersonagens = (personagem) => {
    return personagensData.postPersonagens(personagem);
};