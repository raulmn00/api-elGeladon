const mongoose = require('mongoose');

const coversAvailableSchema = new mongoose.Schema({
    name: { type: String, require: true },
});

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
        type: [coversAvailableSchema],
        require: true,
    },
});

const Palete = mongoose.model('paletes', PaleteSchema);

module.exports = Palete;
