const express = require('express');
const server = express();
const cors = require('cors');


server.use(cors());
server.use(express.json());

let dados = [
    { nome: 'Fusca', marca: 'Volkswagem', km: '200' },
    { nome: 'Ford ka', marca: 'Ford', km: '501' },
    { nome: 'Corsa', marca: 'Chevrolet', km: '404' },
    { nome: 'C180', marca: 'Mercedez', km: '500' }
]

//funcao get
server.get('/', (req, res) =>{
    return res.json(dados)
});

//funcao post
server.post('/add', (req, res) =>{
    const body = req.body
    if(!body){
        return res.status(400).end()
    }
    dados.push(body)
    return res.json(body)
});


server.listen(3001, () =>{
    console.log(`Servidor rodando na porta: 3001`)
});