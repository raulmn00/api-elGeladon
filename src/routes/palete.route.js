const route = require('express').Router();
const controllerPaletes = require('../controllers/palete.controller');

route.get('/find-paletes', controllerPaletes.findAllPaletesController);
route.get('/find-palete/:id', controllerPaletes.findPaleteByIdController);
route.post('/create-palete', controllerPaletes.createPaleteController);
route.put('/update-palete', controllerPaletes.updatePaleteController);
route.delete('/delete-palete/:id', controllerPaletes.deletePaleteController);

module.exports = route;
