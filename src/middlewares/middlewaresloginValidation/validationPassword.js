const validatePassword = (req, _res, next) => {
    const activity = req.body;
   
    if (!activity.password) {
        const err = {
            statusCode: 400,
            message: 'O campo "password" é obrigatório',
        };
        return next(err);
    }
    if (JSON.parse(activity.password.length) < 6) {
        const error = {
            statusCode: 400,
            message: 'O "password" deve ter pelo menos 6 caracteres',
        };
        return next(error);
    }
    next();
};

module.exports = validatePassword;