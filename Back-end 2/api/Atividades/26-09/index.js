const express = require('express');
const { colecaoFl } = require('./dados/dados.js');

const app = express();

app.get('/aviao', (req, res) => {
    res.json(colecaoFl);
});

app.get("/aviao/:idFl", (req, res) => {
    const idFL = parseInt(req.params.idFl);
    let mensagemErro = '';
    let fl;

    if (!isNaN(idFL)) {
        fl = colecaoFl.find(f => f.id === idFL);
        if (!fl) {
            mensagemErro = 'FL não encontrada';
        }
    } else {
        mensagemErro = 'Requisição inválida';
    }

    if (fl) {
        res.json(fl);
    } else {
        res.status(404).json({ "erro": mensagemErro });
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});
