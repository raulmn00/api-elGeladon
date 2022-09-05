const mongoose = require('mongoose');

const PaleteSchema = new mongoose.Schema({
    titulo: {
        type: String,
        require: true,
    },
    descricao: {
        type: String,
        require: true,
    },
    foto: {
        type: String,
        require: true,
    },
    preco: {
        type: Number,
        require: true,
    },
    sabor: {
        type: String,
        require: true,
    },
    recheio: {
        type: String,
        require: true,
    },
    possuiRecheio: {
        type: Boolean,
        require: true,
    },
});

const Palete = mongoose.model('paletes', PaleteSchema);

module.exports = Palete;
