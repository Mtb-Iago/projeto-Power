const express = require('express'); //esta importando o modulo express para a variavel express
const cors = require('cors');
const routes = require('./routes'); //importando as rotas com ./ para indentificar que nao e um pacote e sim um arquivo

const app = express(); //app recebe express

 
app.use(express.json()); //converta esse json em js>>> importante ser antes da requisição
app.use(cors());//depois coloca origin
app.use(routes); //app funcionando com as rotas


app.listen(3333); //localhost:3333
