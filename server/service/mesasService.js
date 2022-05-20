const mesasData = require('../data/mesasData');

exports.getMesas = () => {
    return mesasData.getMesas();
};

exports.postMesas = async (mesa) => {
    return await mesasData.postMesas(mesa);
};

exports.putMesas = async (id, mesa) => {
    return await mesasData.putMesas(id, mesa);
};

exports.deleteMesas = async (id) => {
    return await mesasData.deleteMesas(id);
};