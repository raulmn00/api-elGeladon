const mongoose = require('mongoose');
const paletes = require('../mocks/paletes');

const PaleteSchema = new mongoose.Schema({
    flavor: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    picture: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    coversAvailable: {
        type: Object,
        require: true,
    },
});

const Palete = mongoose.model('paletes', PaleteSchema);

module.exports = Palete;
