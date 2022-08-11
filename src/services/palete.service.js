//const paletes = require('../mocks/paletes');
const PaletesEntity = require('../entities/Paletes.entity');
const CoversAvailableEntity = require('../entities/CoversAvailable.entity');
const PaleteSchema = require('../models/Palete');

async function findAllPaletesService() {
    const paletes = await PaleteSchema.find();
    if (!paletes) {
        return res.status(400).send({ message: 'Paleta não encontrada!' });
    }
    return paletes;
}

async function findPaleteByIdService(idParam) {
    const paleteFinded = await PaleteSchema.findById(idParam);
    return paleteFinded;
}

async function createPaleteService(newPalete) {
    const paleteCreated = await PaleteSchema.create(newPalete);
    return paleteCreated;
}

async function updatePaleteService(idParam, paleteEdited) {
    const paleteUpdate = await PaleteSchema.findByIdAndUpdate(
        idParam,
        paleteEdited,
    );
    return paleteUpdate;
}

async function deletePaleteService(idParam) {
    return await PaleteSchema.findByIdAndDelete(idParam);
}

module.exports = {
    findAllPaletesService,
    findPaleteByIdService,
    updatePaleteService,
    createPaleteService,
    deletePaleteService,
};
