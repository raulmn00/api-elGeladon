const mongoose = require('mongoose');

const connectToDatabase = () => {
    mongoose
        .connect('mongodb://localhost:27017/paletesDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('MongoDB connected!');
        })
        .catch((err) => {
            console.log(`Erro ao conectar com o MongoDB, ${err}`);
        });
};

module.exports = connectToDatabase;
