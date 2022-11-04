const functionValidatesEmail = require('./functionValidatesEmail');

const validateEmail = (req, res, next) => {
    const activity = req.body;
    const validate = functionValidatesEmail(activity.email);

    if (!activity.email) {
        const err = {
            statusCode: 400,
            message: 'O campo "email" é obrigatório',
        };
        return next(err);
    }
    if (!validate) {
        const error = {
            statusCode: 400,
            message: 'O "email" deve ter o formato "email@email.com"',
        };
        return next(error);
    }
    next();
};

module.exports = validateEmail;