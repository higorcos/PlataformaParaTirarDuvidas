const Sequelize = require('sequelize');
const connection = require('./database');

const Resposta = connection.define('respostas',{
    corpo:{
        type: Sequelize.TEXT,//txtodo tipo longo
        allowNull: false
    },
    perguntaID: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
Resposta.sync({force: false});

module.exports = Resposta;