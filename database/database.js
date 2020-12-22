const Sequelize = require('sequelize');
const connection = new Sequelize('Duvidas.js', 'root','password',{
    host: 'localhost', //onde está rodando o banco de dados 
    dialect: 'mysql'   //qual tipo de banco de dados 
});

module.exports = connection; //exportando para ser usado em outros arquivos 