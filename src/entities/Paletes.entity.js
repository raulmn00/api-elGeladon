const crypto = require('crypto');
class Paletes {
    constructor(palete) {
        this.id = palete.id ? palete.id : crypto.randomUUID();
        this.titulo = palete.titulo;
        this.descricao = palete.description;
        this.foto = palete.foto;
        this.preco = palete.preco;
        this.sabor = palete.sabor;
        this.recheio = palete.recheio;
        this.possuiRecheio = palete.possuiRecheio;
    }
    validatePalete() {
        if (!this.titulo) {
            throw new Error('Título precisa ser informado!');
        }
        if (!this.recheio) {
            throw new Error('Recheio precisa ser informado!');
        }
        if (!this.possuiRecheio) {
            throw new Error('Possuir Recheio precisa ser informado!');
        }
        if (!this.sabor) {
            throw new Error('Sabor precisa ser informado!');
        }
        if (!this.descricao) {
            throw new Error('Descrição precisa ser informado!');
        }
        if (!this.foto) {
            throw new Error('Foto precisa ser informado!');
        }
        if (!this.preco) {
            throw new Error('Preço precisa ser informado!');
        }
    }

    getPalete() {
        return {
            id: this.id,
            titulo: this.titulo,
            descricao: this.descricao,
            foto: this.foto,
            preco: this.preco,
            sabor: this.sabor,
            recheio: this.recheio,
            possuiRecheio: this.possuiRecheio,
        };
    }
}

module.exports = Paletes;
