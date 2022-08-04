const crypto = require('crypto');
class Paletes {
    constructor(palete) {
        this.id = crypto.randomUUID();
        this.flavor = palete.flavor;
        this.description = palete.description;
        this.picture = palete.picture;
        this.price = palete.price;
    }
    validatePalete() {
        if (!this.flavor) {
            throw new Error('Sabor precisa ser informado!');
        }
        if (!this.description) {
            throw new Error('Descrição precisa ser informado!');
        }
        if (!this.picture) {
            throw new Error('Foto precisa ser informado!');
        }
        if (!this.price) {
            throw new Error('Preço precisa ser informado!');
        }
    }

    getPalete() {
        return {
            id: this.id,
            flavor: this.flavor,
            description: this.description,
            picture: this.picture,
            price: this.price,
        };
    }
}

module.exports = Paletes;
