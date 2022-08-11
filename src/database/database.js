const mongoose = require('mongoose');

const connectToDatabase = () => {
    mongoose
        .connect(process.env.URI_DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('MongoDB Atlas connected!');
        })
        .catch((err) => {
            console.log(`Erro ao conectar com o MongoDB, ${err}`);
        });
};

module.exports = connectToDatabase;
