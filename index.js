const express = require('express');
const app = express();


app.set('view engine', 'ejs'); //motor html //estou dizendo para o express usar o EJS como View engine 
app.use(express.static('public'));

app.get('/', (req, res) => {

  res.render('index');//vai mostra o html pelo EJS que tá na pasta "views"// só coloca  o nome do arquivo não precisa colocar o diretório completo.//passa a variavel para o html 
});
app.get('/perguntar',(req,res)=>{
  res.render('perguntar');//nome do arguivo ejs
})

app.listen(8181, () => { console.log('App rodando'); });
