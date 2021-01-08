/* 
   Sugestão 
Organizar os titulos das peguntas em modo de relevância 
*/


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
app.use(bodyParser.urlencoded({ extended: false })); // usado para traduzir os dados passados no formulario 
app.use(bodyParser.json()); // os dados são enviados via json 

//Rotas
app.get('/', (req, res) => {
  perguntas.findAll({ raw: true, order:[ //ASC= Crescente; DESC = Descrecente 
    ['id','DESC'] //vai colocar os titulos das perguntas na pagina de forma DESC(descrecente) de 'id'(id - numeração presente no bonco de dados )
  ]}).then(pergunta => {  //Ele vai buscar os dados já presentes na tabela do banco de dados // semelhante a   SELECT * ALL FROM perguntas
    res.render('index', {
      pergunta: pergunta
    });
  });
});



app.get('/perguntar', (req, res) => {
  res.render('perguntar');//vai mostra o html pelo EJS que tá na pasta "views"// só coloca  o nome do arquivo não precisa colocar o diretório completo.//passa a variavel para o html 
})

app.post('/salvarPergunta', (req, res) => {
  //recebe os dados passados pelo usuario no formulario a partir do "name"
  var tituloUS = req.body.titulo;
  var descriçãoUS = req.body.descrição;

  perguntas.create({ //Salva no banco de dados //semelhante a   INSERT INTO perguntas 
    titulo: tituloUS,
    descricao: descriçãoUS,

  }).then(() => {//depois de salvar os dados no banco de dados ele redireciona o usuário para a página principal 
    res.redirect('/');
  })
});

app.get("/pergunta/:id",(req,res) => {
 var id =req.params.id;
 perguntas.findOne({
   where: {id: id}
 }).then(pergunta =>{
   if(pergunta != undefined){
    res.render("descriçãoPerguntas");
   }else{ 
    res.redirect("/")
   }
 })
})


app.listen(8181, () => {
  console.log('App rodando');
});
