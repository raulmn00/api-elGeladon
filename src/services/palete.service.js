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

function updatePaleteService(palete) {
    const updatePaleteService = new PaletesEntity(palete);
    updatePaleteService.validatePalete();
    if (!palete.coversAvailable) {
        throw new Error('Coberturas precisam ser informadas');
    }
    const listCovers = [];
    palete.coversAvailable.map((cover) => {
        const updatedCover = new CoversAvailableEntity(cover);
        updatedCover.validateCover();
        listCovers.push(updatedCover.getCoversAvailable());
    });
    const updatedPalete = {
        ...updatePaleteService.getPalete(),
        coversAvailable: listCovers,
    };

    paletes.map((eachPalete, index) => {
        if (eachPalete.id == updatedPalete.id) {
            paletes.splice(index, 1, updatedPalete);
        }
    });
    return updatedPalete;
}

function deletePaleteService(id) {
    let paleteDeleted;
    paletes.map((palete, index) => {
        if (palete.id == id) {
            paleteDeleted = palete;
            paletes.splice(index, 1);
        }
    });
    return paleteDeleted;
}

module.exports = {
    findAllPaletesService,
    findPaleteByIdService,
    updatePaleteService,
    createPaleteService,
    deletePaleteService,
};
