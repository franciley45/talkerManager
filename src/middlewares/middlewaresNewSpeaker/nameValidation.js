const nameValidation = (req, _res, next) => {
  const { name } = req.body;
  if (!name) {
    const err = {
      statusCode: 400,
      message: 'O campo "name" é obrigatório',
    };
    next(err);
  } else if (name.length < 4) {
    const error = {
      statusCode: 400,
      message: 'O "name" deve ter pelo menos 3 caracteres',
    };
    next(error);
  }
  next();
};

module.exports = nameValidation;