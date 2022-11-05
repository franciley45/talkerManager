const dataRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

const talkValidation = (req, _res, next) => {
const { talk } = req.body;
if (!talk) {
    const err = {
        statusCode: 400,
        message: 'O campo "talk" é obrigatório',
    };
    next(err);
} else if (!talk.watchedAt) {
    const error = {
        statusCode: 400,
        message: 'O campo "watchedAt" é obrigatório',
    };
    next(error);
} else if (!dataRegex.test(talk.watchedAt)) {
    const er = { statusCode: 400, message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' };
    next(er);
}
  next();
};

module.exports = talkValidation;