const express = require('express');
const app = express();


app.set('view engine','ejs'); //motor html //estou dizendo para o express usar o EJS como View engine 
app.use(express.static('public'));

app.get('/', (req, res) => {
  var nome = 'higor';
  var lang = 'Javascript';
  var msgServidor0 = true;
  var contato = [
    {email: "higorpinheirocosta@gmail.com", dominio:'@gmail'},
    {email: "higorcosta2001@outlook.com",  dominio:'@outlook'},
    {email: "higor.cos@discenteufma.com",  dominio:'@discenteufma'},

  ]

  res.render('index',{
    nomeUser: nome,
    langUser: lang,
    msgServidor: msgServidor0,
    contatoUser: contato,
    projeto: 'Projetando.js',
  });//vai mostra o html pelo EJS que tá na pasta "views"// só coloca  o nome do arquivo não precisa colocar o diretório completo.//passa a variavel para o html 
})

app.listen(8080,()=> {console.log('App rodando');});
