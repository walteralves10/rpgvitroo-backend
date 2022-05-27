const mesas_personagensData = require('../data/mesas_personagensData');
const personagens = require('../data/personagensData');
const mesa = require('../data/mesasData');

exports.getMesas_personagens = (id) => {
    return mesas_personagensData.getMesas_personagens(id);
};

exports.postMesas_personagens = async (dados) => {
    return await mesas_personagensData.postMesas_personagens(dados);
};

// exports.putMesas_personagens = (id) => {
//   return mesas_personagensData.putMesas_personagens(id);  
// };

exports.deleteMesas_personagens = async (id_mesa) => {
    const seila =  await this.getMesas_personagens(id_mesa);
    await mesas_personagensData.deleteMesas_personagens(id_mesa);

    if (seila.length) {
        Promise.all(seila.map(async (value) => {
            await personagens.deletePersonagens(value.id_personagem);
        }));
    }
    
    return await mesa.deleteMesas(id_mesa);
};