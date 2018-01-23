const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const clientesController = require('./controllers/clientes');
const animaisController = require('./controllers/animais');

app.use(bodyParser.json());

app.listen(3000, () => {
   console.log('Servidor rodando. Acesse em http://localhost:3000');
});
app.get('/clientes', clientesController.listar);
app.post('/clientes', clientesController.listar);

app.get('/clientes', clientesController.criar);
app.post('/clientes', clientesController.criar);

app.get('/animais', animaisController.listar);
app.post('/animais', animaisController.listar);

app.get('/animais', animaisController.criar);
app.post('/animais', animaisController.criar);




























































































// app.get('/clientes', (req, res) =>{
//     res.send('rota clientes');
// })
// app.get('/animais', (req, res) => {
//     res.send('rotas animais');
// })
