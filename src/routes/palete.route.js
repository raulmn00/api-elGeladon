const route = require('express').Router();
const controllerPaletes = require('../controllers/palete.controller');
const { validId, validObjectBody } = require('../middleware/Palete.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

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
