const mongoose = require('mongoose');

const connectToDatabase = () => {
    mongoose
        .connect(
            'mongodb+srv://root:root@api-elgeladon.6dk2aiz.mongodb.net/?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        )
        .then(() => {
            console.log('MongoDB connected!');
        })
        .catch((err) => {
            console.log(`Erro ao conectar com o MongoDB, ${err}`);
        });
};

module.exports = connectToDatabase;
