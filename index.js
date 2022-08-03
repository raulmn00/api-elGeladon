const express = require('express');
const paletes = require('./mocks/paletes');
const cors = require('cors');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/paletes/find-paletes', (req, res) => {
    res.send(paletes);
});
app.get('/paletes/find-palete/:id', (req, res) => {
    const idParam = Number(req.params.id);
    const chosenPalete = paletes.find((palete) => palete.id === idParam);
    res.send(chosenPalete);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
