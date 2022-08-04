const paleteServices = require('../services/palete.service');

const findAllPaletesController = (req, res) => {
    const paletes = paleteServices.findAllPaletesService();
    res.send(paletes);
};

const findPaleteByIdController = (req, res) => {
    const idParam = Number(req.params.id);
    const chosenPalete = paleteServices.findPaleteByIdService(idParam);
    res.send(chosenPalete);
};
module.exports = {
    findAllPaletesController,
    findPaleteByIdController,
};
