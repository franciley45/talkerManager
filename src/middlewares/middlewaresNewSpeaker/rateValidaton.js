const rateValidaton = (req, _res, next) => {
const { rate } = req.body.talk;
const result = Number(rate);
if (rate === undefined) {
    const err = {
        statusCode: 400,
        message: 'O campo "rate" é obrigatório',
    };
    next(err);
} else if (result < 1 || result > 5 || result % 1 !== 0) {
    const error = {
        statusCode: 400,
        message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    };
    next(error);
}
next();
};

module.exports = rateValidaton;