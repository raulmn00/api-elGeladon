//const paletes = require('../mocks/paletes');
const PaletesEntity = require('../entities/Paletes.entity');
const CoversAvailableEntity = require('../entities/CoversAvailable.entity');
const Paletes = require('../models/Palete');

async function findAllPaletesService() {
    const paletes = await Paletes.find();
    return paletes;
}

async function findPaleteByIdService(id) {
    const paleteFinded = await Paletes.findById(id);
    return paleteFinded;
}

function createPaleteService(palete) {
    const newPalete = new PaletesEntity(palete);
    newPalete.validatePalete();

    if (!palete.coversAvailable) {
        throw new Error('Precisa informar as coberturas.');
    }

    const listCovers = [];
    palete.coversAvailable.map((cover) => {
        const newCover = new CoversAvailableEntity(cover);
        newCover.validateCover();
        listCovers.push(newCover.getCoversAvailable());
    });

    const paleteValidated = {
        ...newPalete.getPalete(),
        coversAvailable: listCovers,
    };
    //console.log(paleteValidated);
    paletes.push(paleteValidated);
    //console.log(paleteValidated.coversAvailable);
    //console.log(newPalete.getPalete());
    //console.log(palete);
    return paleteValidated;
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
