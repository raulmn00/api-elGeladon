const paleteServices = require('../services/palete.service');
const mongoose = require('mongoose');

const findAllPaletesController = async (req, res) => {
    const allPaletes = await paleteServices.findAllPaletesService();
    res.send(allPaletes);
};

const findPaleteByIdController = async (req, res) => {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
        return res.status(400).send({ message: 'Id invalido!' });
    }
    const chosenPalete = await paleteServices.findPaleteByIdService(idParam);
    res.send(chosenPalete);
};

const createPaleteController = async (req, res) => {
    const palete = req.body;
    if (
        !palete ||
        !palete.flavor ||
        !palete.description ||
        !palete.picture ||
        !palete.price
    ) {
        return res.status(400).send({
            message:
                'Você não preencheu todos os dados para adicionar uma nova paleta ao cardápio!',
        });
    }
    const paleteCreated = await paleteServices.createPaleteService(palete);

    res.status(201).send(paleteCreated);
};

const updatePaleteController = async (req, res) => {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
        return res.status(400).send({ message: 'Id invalido!' });
    }

    const paleteEdited = req.body;
    if (
        !paleteEdited ||
        !paleteEdited.flavor ||
        !paleteEdited.description ||
        !paleteEdited.picture ||
        !paleteEdited.price
    ) {
        return res.status(400).send({
            message:
                'Você não preencheu todos os dados para adicionar uma nova paleta ao cardápio!',
        });
    }
    const paleteUpdated = await paleteServices.updatePaleteService(
        idParam,
        paleteEdited,
    );
    res.send(paleteUpdated);
};

const deletePaleteController = async (req, res) => {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
        return res.status(400).send({ message: 'Id invalido!' });
    }

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
