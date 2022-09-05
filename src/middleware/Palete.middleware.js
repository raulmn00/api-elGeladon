const mongoose = require('mongoose');

const validId = (req, res, next) => {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
        return res.status(400).send({ message: 'Id invalido!' });
    }
    next();
};

const validObjectBody = (req, res, next) => {
    const paleteEdited = req.body;
    if (
        !paleteEdited ||
        !paleteEdited.titulo ||
        !paleteEdited.descricao ||
        !paleteEdited.foto ||
        !paleteEdited.preco ||
        !paleteEdited.sabor
    ) {
        return res.status(400).send({
            message:
                'Você não preencheu todos os dados para adicionar uma nova paleta ao cardápio!',
        });
    }
    next();
};

module.exports = {
    validId,
    validObjectBody,
};
