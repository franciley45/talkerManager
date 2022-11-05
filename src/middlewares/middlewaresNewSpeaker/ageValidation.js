const ageValidation = (req, _res, next) => {
    const { age } = req.body;
    if (!age) {
        const err = {
            statusCode: 400,
            message: 'O campo "age" é obrigatório',
        };
        next(err);
    } else if (JSON.parse(age) < 18) {
        const error = {
            statusCode: 400,
            message: 'A pessoa palestrante deve ser maior de idade',
        };
        next(error);
    }
    next();
};

module.exports = ageValidation;