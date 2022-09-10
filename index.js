require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Cover = require('./src/entities/CoversAvailable.entity');
const routes = require('./src/routes/palete.route');
const service = require('./src/services/palete.service');
const controller = require('./src/controllers/palete.controller');
const connectToDatabase = require('./src/database/database');

const port = process.env.PORT || 4000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/paletes', routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
