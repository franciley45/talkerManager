const express = require('express');
const addLogin = require('./middlewares/addLoginPost');
const validateEmail = require('./middlewares/middlewaresloginValidation/validationEmail');
const validatePassword = require('./middlewares/middlewaresloginValidation/validationPassword');
const SearchAll = require('./middlewares/SearchAllGet');
const searchById = require('./middlewares/searchByIdGet');

const route = express.Router();

route.get('/talker', SearchAll);

route.get('/talker/:id', searchById);

route.post('/login', validateEmail, validatePassword, addLogin);

module.exports = route;