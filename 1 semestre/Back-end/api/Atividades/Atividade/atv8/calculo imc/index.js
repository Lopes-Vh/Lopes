const express = require('express');
const app = express();
const calculadoraIMC = require('./calculadoraIMC');

app.get("/", (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;
    if (calculadoraIMC.validaparametro(peso) && calculadoraIMC.validaparametro(altura)) {
        let imc = calculadoraIMC.efetuarCalculoIMC(peso, altura);
        let status = calculadoraIMC.retornaStatusIMC(imc);

        let json = { imc: imc, status: status };

        res.json(json);
    } else {
        res.status(400).json({ 'erro': 'Peso ou altura inválido' });
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log("Servidor node iniciado em: " + data);
});
