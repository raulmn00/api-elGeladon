const paleteServices = require('../services/palete.service');
const mongoose = require('mongoose');

const findAllPaletesController = async (req, res) => {
    const allPaletes = await paleteServices.findAllPaletesService();
    res.send(allPaletes);
};

const findPaleteByIdController = async (req, res) => {
    const idParam = req.params.id;
    const chosenPalete = await paleteServices.findPaleteByIdService(idParam);
    if (!chosenPalete) {
        return res.status(400).send({ message: 'Paleta não encontrada!' });
    }
    res.send(chosenPalete);
};

const createPaleteController = async (req, res) => {
    const palete = req.body;
    const paleteCreated = await paleteServices.createPaleteService(palete);
    res.status(201).send(paleteCreated);
};

const updatePaleteController = async (req, res) => {
    const idParam = req.params.id;
    const paleteEdited = req.body;
    const paleteUpdated = await paleteServices.updatePaleteService(
        idParam,
        paleteEdited,
    );
    res.send(paleteUpdated);
};

const deletePaleteController = async (req, res) => {
    const idParam = req.params.id;
    await paleteServices.deletePaleteService(idParam);
    res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
    findAllPaletesController,
    findPaleteByIdController,
    updatePaleteController,
    createPaleteController,
    deletePaleteController,
};
