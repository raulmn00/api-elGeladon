const route = require('express').Router();
const controllerPaletes = require('../controllers/palete.controller');
const { validId, validObjectBody } = require('../middleware/Palete.middleware');

route.get('/', controllerPaletes.findAllPaletesController);
route.get(
    '/one-palete/:id',
    validId,
    controllerPaletes.findPaleteByIdController,
);
route.post(
    '/create-palete',
    validObjectBody,
    controllerPaletes.createPaleteController,
);
route.put(
    '/update-palete/:id',
    validId,
    validObjectBody,
    controllerPaletes.updatePaleteController,
);
route.delete(
    '/delete-palete/:id',
    validId,
    controllerPaletes.deletePaleteController,
);

module.exports = route;
