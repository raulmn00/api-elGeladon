const paleteServices = require('../services/palete.service');
const mongoose = require('mongoose');

const findAllPaletesController = async (req, res) => {
    const paletes = await paleteServices.findAllPaletesService();
    res.send(paletes);
};

const findPaleteByIdController = async (req, res) => {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
        return res.status(400).send({ message: 'Id invalido!' });
    }
    const chosenPalete = await paleteServices.findPaleteByIdService(idParam);
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
