const mesas_personagensData = require('../data/mesas_personagensData');

exports.getMesas_personagens = (id) => {
    return mesas_personagensData.getMesas_personagens(id);
};

exports.postMesas_personagens = (dados) => {
    return mesas_personagensData.postMesas_personagens(dados);
};

// exports.putMesas_personagens = (id) => {
//   return mesas_personagensData.putMesas_personagens(id);  
// };

exports.deleteMesas_personagens = (id_personagem, id_mesa) => {
    return mesas_personagensData.deleteMesas_personagens(id_personagem, id_mesa);
};