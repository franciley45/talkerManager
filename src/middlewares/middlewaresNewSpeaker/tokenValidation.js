const tokenValidation = async (req, _res, next) => {
    const { headers: { authorization } } = req;
  
    if (!authorization) {
      const err = {
        statusCode: 401,
            message: 'Token não encontrado',
    };
    next(err);
    } else if (authorization.length !== 16) {
      const error = {
        statusCode: 401,
            message: 'Token inválido',
    };
    next(error);
    }
    next();
  };

  module.exports = tokenValidation;