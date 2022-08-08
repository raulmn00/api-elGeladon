const express = require('express');
const paletes = require('../api-elGeladon/src/mocks/paletes');
const cors = require('cors');
const Cover = require('./src/entities/CoversAvailable.entity');
const routes = require('./src/routes/palete.route');
const service = require('./src/services/palete.service');
const controller = require('./src/controllers/palete.controller');
const connectToDatabase = require('./src/database/database');

const port = 3000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/paletes', routes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
