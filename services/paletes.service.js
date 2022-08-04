const paletes = require('../mocks/paletes');
const PaletesEntity = require('../entities/Paletes.entity');
const CoversAvailableEntity = require('../entities/CoversAvailable.entity');

function findAllPaletes() {
    return paletes;
}

function findPaleteById(id) {
    let paleteFinded;
    paletes.map((palete) => {
        if (palete.id == id) {
            paleteFinded = palete;
        }
    });
    return paleteFinded;
}

function createPalete(palete) {
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

function updatePalete(palete) {
    const updatePalete = new PaletesEntity(palete);
    updatePalete.validatePalete();
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
        ...updatePalete.getPalete(),
        coversAvailable: listCovers,
    };

    paletes.map((eachPalete, index) => {
        if (eachPalete.id == updatedPalete.id) {
            paletes.splice(index, 1, updatedPalete);
        }
    });
    return updatedPalete;
}

const paletaCriada = createPalete({
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

const paletaAtualizada = updatePalete({
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
