const Sequelize = require('sequelize');
const connection = require('./database');

const perguntas = connection.define('perguntas',{ //criando model/tabela
    titulo:{
        type: Sequelize.STRING, //fala o tipo 
        allowNull: false  //fala que o campo não pode ficar em branco 
    },
    descricao:{
        type: Sequelize.TEXT, 
        allowNull: false
    }
});
perguntas.sync({force: false}).then(() => {
}); // vai criar a tabela "perguntas" se ainda não não existir !

module.exports = perguntas;