const route = require('express').Router();
const controllerPaletes = require('../controllers/palete.controller');

route.get('/all-paletes', controllerPaletes.findAllPaletesController);
route.get('/one-palete/:id', controllerPaletes.findPaleteByIdController);
route.post('/create-palete', controllerPaletes.createPaleteController);
route.put('/update-palete/:id', controllerPaletes.updatePaleteController);
route.delete('/delete-palete/:id', controllerPaletes.deletePaleteController);

module.exports = route;
