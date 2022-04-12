const mesasData = require('../data/mesasData');

exports.getMesas = () => {
    return mesasData.getMesas();
};

exports.postMesas = async (mesa) => {
    return await mesasData.postMesas(mesa);
    //const id_mesa = mesasData.getMaxID();
    //return id_mesa;
};