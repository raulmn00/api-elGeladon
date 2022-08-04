const paletes = require('../mocks/paletes');
const PaletesEntity = require('../entities/Paletes.entity');
const CoversAvailableEntity = require('../entities/CoversAvailable.entity');

function findAllPaletesService() {
    return paletes;
}

function findPaleteByIdService(id) {
    let paleteFinded;
    paletes.map((palete) => {
        if (palete.id == id) {
            paleteFinded = palete;
        }
    });
    if (paleteFinded) {
        return paleteFinded;
    } else {
        return 'Nenhuma paleta foi encontrada';
    }
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

module.exports = {
    findAllPaletesService,
    findPaleteByIdService,
    updatePaleteService,
    createPaleteService,
};

/*
const paletaCriada = createPaleteService({
    id: 2345678,
    flavor: 'Teste',
    description: 'description teste',
    picture: './assets/images/teste.png',
    price: 10,
    coversAvailable: [
        {
            name: 'cobertura de teste',
        },
    ],
});

const paletaAtualizada = updatePaleteService({
    id: 2345678,
    flavor: 'Teste updated',
    description: 'description teste updated',
    picture: './assets/images/teste.png',
    price: 10,
    coversAvailable: [
        {
            name: 'cobertura de teste',
        },
    ],
});

console.log(paletaCriada);
console.log(paletaAtualizada);
*/
