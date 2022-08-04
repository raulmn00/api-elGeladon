const express = require('express');
const paletes = require('./mocks/paletes');
const cors = require('cors');
const Cover = require('./entities/CoversAvailable.entity');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/paletes/find-paletes', (req, res) => {
    const cover1 = new Cover({
        name: 'Paçoca com Nutela',
    });
    cover1.validateCover();
    console.log(cover1.getCoversAvailable());
    res.send(paletes);
});
app.get('/paletes/find-palete/:id', (req, res) => {
    const idParam = Number(req.params.id);
    const chosenPalete = paletes.find((palete) => palete.id === idParam);
    if (chosenPalete) {
        res.send(chosenPalete);
    } else {
        res.send('Nenhuma paleta foi encontrada.');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
