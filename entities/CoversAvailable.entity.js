const uuid = require('crypto');

class CoversAvailable {
    constructor(cover) {
        this.id = uuid.randomUUID();
        this.name = cover.name;
    }

    validateCover() {
        if (!this.name) {
            throw new Error('Nome da cobertura precisa ser preenchido');
        }
    }

    getCoversAvailable() {
        return {
            id: this.id,
            name: this.name,
        };
    }
}

module.exports = CoversAvailable;
