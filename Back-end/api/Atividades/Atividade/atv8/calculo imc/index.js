const express = require('express');
const app = express();
const calculadoraIMC = require('./calculadoraIMC');

app.get("/", (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;
    if(calculadoraIMC.validaparametro(req.query.peso) &&
    calculadoraIMC.validaparametro(req.query.altura))
    {
    let imc = calculadoraIMC.efetuarCalculoIMC(peso, altura);

    let json = {imc: imc, status: status};

    res.json({imc: imc});
    }
    else
    {
    res.status(400) .json({'erro': 'Peso ou altura invalido'})
}
});

app.listen(8080, () => {
    let data = new Date();
    console.log("Servidor node iniciado em: " + data);
});
