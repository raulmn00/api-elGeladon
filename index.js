require('dotenv').config();
const express = require('express');
const paletes = require('../api-elGeladon/src/mocks/paletes');
const cors = require('cors');
const Cover = require('./src/entities/CoversAvailable.entity');
const routes = require('./src/routes/palete.route');
const service = require('./src/services/palete.service');
const controller = require('./src/controllers/palete.controller');
const connectToDatabase = require('./src/database/database');

const PORT = process.env.PORT || '3000';
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
