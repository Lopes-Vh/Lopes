const express = require('express');
const colecaoUf = require('./dados/dados.js');

const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoUf);
});

app.get("/ufs/:idUf", (req, res) => {
    const idUF = parseInt(req.params.idUf);
    let mensagemErro = '';
    let uf;

    if (!isNaN(idUF)) {
        uf = colecaoUf.colecaoUffind(u => u.id === idUF);
        if (!uf) {
            mensagemErro = 'UF não encontrada';
        }
    } else {
        mensagemErro = 'Requisição inválida';
    }

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).json({ "erro": mensagemErro });
    }
});




app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});
