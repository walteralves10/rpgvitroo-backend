const personagensData = require('../data/personagensData');
const mesas_personagemData = require('../data/mesas_personagensData');

exports.getPersonagens = () => {
    return personagensData.getPersonagens();
};

exports.getPersonagensUnicaMesa = (fk_id) => {
    return personagensData.getPersonagensUnicaMesa(fk_id);
};

exports.postPersonagens = async (personagem, id_mesa) => {

    // return Promise.all(personagem.map(async (value) => {
    //     let id_personagem = await personagensData.postPersonagens(value.dados);
    //     await mesas_personagemData.postMesas_personagens({id_mesa:parseInt(id_mesa), id_personagem});
    // }));

    //console.log(personagem);
        let id_personagem = await personagensData.postPersonagens(personagem);
        return await mesas_personagemData.postMesas_personagens({id_mesa:parseInt(id_mesa), id_personagem});
    
    // personagem.forEach(async element => {
    //     let id_personagem = await personagensData.postPersonagens(element.dados);
    //     console.log(id_personagem);
    //     await mesas_personagemData.postMesas_personagens({id_mesa:parseInt(id_mesa), id_personagem});
    // });
    
};

exports.putPersonagens = async (id, personagem) => {
    return await personagensData.putPersonagens(id, personagem);
}

exports.deletePersonagens = async (id) => {
    return await personagensData.deletePersonagens(id);
};