const { getAllSpeakers } = require('../request/requestAPI');

const searchById = async (req, res, next) => {
    const { id } = req.params;
    const requere = await getAllSpeakers();
    const result = requere.find((e) => e.id === Number(id));
    if (result === undefined) {
        const error = {
            statusCode: 404,
            message: 'Pessoa palestrante não encontrada',
        };
        return next(error);
    }
    res.status(200).json(result);
};

module.exports = searchById;