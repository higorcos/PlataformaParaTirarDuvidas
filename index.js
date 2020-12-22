const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //importando a biblioteca que facilita a leitura dos dados passados pelo usuario 
const connection = require('./database/database'); // importando o banco de dados
const perguntas = require('./database/Perguntas'); //importando a tabela 

//database
connection 
  .authenticate()
  .then(() => {
    console.log('Conectado com succeso ao banco de dados');
  })
  .catch((msqErro) => {
    console.log(msqErro);
  })

//EJS
app.set('view engine', 'ejs'); //motor html //estou dizendo para o express usar o EJS como View engine 
app.use(express.static('public'));
//Body Parser
app.use(bodyParser.urlencoded({extended: false})); // usado para traduzir os dados passados no formulario 
app.use(bodyParser.json()); // os dados são enviados via json 
//Rotas
app.get('/', (req, res) => {

  res.render('index');//vai mostra o html pelo EJS que tá na pasta "views"// só coloca  o nome do arquivo não precisa colocar o diretório completo.//passa a variavel para o html 
});
app.get('/perguntar',(req,res)=>{
  res.render('perguntar');//nome do arguivo ejs
})
app.post('/salvarPergunta',(req,res)=>{
  var titulo = req.body.titulo;
  var descrição = req.body.descrição
  res.send(`Formulário recebido com sucesso !//////////////// ${titulo}${descrição}`);
});

app.listen(8181, () => { console.log('App rodando'); });
