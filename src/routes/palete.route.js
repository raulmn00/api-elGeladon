const route = require('express').Router();
const controllerPaletes = require('../controllers/palete.controller');

route.get('/find-paletes', controllerPaletes.findAllPaletesController);
route.get('/find-palete/:id', controllerPaletes.findPaleteByIdController);

module.exports = route;
