//const paletes = require('../mocks/paletes');
const PaletesEntity = require('../entities/Paletes.entity');
const CoversAvailableEntity = require('../entities/CoversAvailable.entity');
const Palete = require('../models/Palete');

async function findAllPaletesService() {
    const paletes = await Palete.find();
    return paletes;
}

async function findPaleteByIdService(id) {
    const paleteFinded = await Palete.findById(id);
    return paleteFinded;
}

async function createPaleteService(newPalete) {
    const paleteCreated = await Palete.create(newPalete);
    return paleteCreated;
}

async function updatePaleteService(id, paleteEdited) {
    const paleteUpdate = await Palete.findByIdAndUpdate(id, paleteEdited);
    return paleteUpdate;
}

async function deletePaleteService(id) {
    return await Palete.findByIdAndDelete(id);
}

module.exports = {
    findAllPaletesService,
    findPaleteByIdService,
    updatePaleteService,
    createPaleteService,
    deletePaleteService,
};
