const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(3000, () => {
   console.log('Servidor rodando. Acesse em http://localhost:3000');
});
app.get('/clientes', (req, res) =>{
    // let clientes = [
    //     {
    //         "id": "1",
    //         "nome": "Bárbara",
    //         "idade": "18",
    //         "signo": "gêmeos",
    //         "profissão": "professora",
    //         "estado civil": "solteira"
    //     },
    //     {
    //         "id": "2",
    //         "nome": "Caique",
    //         "idade": "22",
    //         "signo": "gêmeos",
    //         "profissão": "repórter",
    //         "estado civil": "solteiro"
    //     },
    //     {
    //         "id": "3",
    //         "nome": "Enzo",
    //         "idade": "14",
    //         "signo": "dinossauro",
    //         "profissão": "minecrafter profissional",
    //         "estado civil": "casado virtualmente"
    //     },
    //     {
    //         "id": "4",
    //         "nome": "Gustavo",
    //         "idade": "18",
    //         "signo": "gêmeos",
    //         "profissão": "professor",
    //         "estado civil": "solteiro"
    //     }
    // ];
    res.send('Ok');
});

app.post('/clientes', (req, res) => {
    let clientes = req.body;
    res.send(clientes);
});




























































































// app.get('/clientes', (req, res) =>{
//     res.send('rota clientes');
// })
// app.get('/animais', (req, res) => {
//     res.send('rotas animais');
// })
