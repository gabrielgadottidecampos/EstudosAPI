const express = require('express'); // salvando na variavel express
const app = express(); // iniciando o express e salvando na variavel app

app.get('/', (req,res) =>{
    return res.json({
        message: "OK"
    })
}); // criando rota basica

app.listen('4567'); // o express está ouvindo na porta 4567
