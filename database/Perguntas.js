const Sequelize = require('sequelize');
const connection = require('./database');

const Perguntas = connection.define('Perguntas',{ //criando model/tabela
    titulo:{
        type: Sequelize.STRING, //fala o tipo 
        allowNull: false  //fala que o campo não pode ficar em branco 
    },
    descricao:{
        type: Sequelize.TEXT, 
        allowNull: false
    }
});
Perguntas.sync({force: false}).then(() => {
 console.log('Tabela criada...')
}); // vai criar a tabela "perguntas" se ainda não não existir !

module.exports = Perguntas;