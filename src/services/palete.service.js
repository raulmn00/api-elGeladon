//const paletes = require('../mocks/paletes');
const PaletesEntity = require('../entities/Paletes.entity');
const CoversAvailableEntity = require('../entities/CoversAvailable.entity');
const Palete = require('../models/Palete');

async function findAllPaletesService() {
    const paletes = await Palete.find();
    return paletes;
}

async function findPaleteByIdService(idParam) {
    const paleteFinded = await Palete.findById(idParam);
    return paleteFinded;
}

async function createPaleteService(newPalete) {
    const paleteCreated = await Palete.create(newPalete);
    return paleteCreated;
}

async function updatePaleteService(idParam, paleteEdited) {
    const paleteUpdate = await Palete.findByIdAndUpdate(idParam, paleteEdited);
    return paleteUpdate;
}

async function deletePaleteService(idParam) {
    return await Palete.findByIdAndDelete(idParam);
}

module.exports = {
    findAllPaletesService,
    findPaleteByIdService,
    updatePaleteService,
    createPaleteService,
    deletePaleteService,
};
