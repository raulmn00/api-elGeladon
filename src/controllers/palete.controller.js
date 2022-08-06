const paleteServices = require('../services/palete.service');

const findAllPaletesController = (req, res) => {
    const paletes = paleteServices.findAllPaletesService();
    res.send(paletes);
};

const findPaleteByIdController = (req, res) => {
    const idParam = Number(req.params.id);
    const chosenPalete = paleteServices.findPaleteByIdService(idParam);
    res.send(chosenPalete);
};

const updatePaleteController = (req, res) => {
    const palete = req.body;
    const paleteUpdated = paleteServices.updatePaleteService(palete);
    res.send(paleteUpdated);
};

const createPaleteController = (req, res) => {
    const palete = req.body;
    const paleteCreated = paleteServices.createPaleteService(palete);
    res.send(paleteCreated);
};

const deletePaleteController = (req, res) => {
    const idPalete = req.params.id;
    const deletedPalete = paleteServices.deletePaleteService(idPalete);
    res.send(deletedPalete);
};

module.exports = {
    findAllPaletesController,
    findPaleteByIdController,
    updatePaleteController,
    createPaleteController,
    deletePaleteController,
};
