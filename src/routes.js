const express = require('express');
const addLogin = require('./middlewares/addLoginPost');
const SearchAll = require('./middlewares/SearchAllGet');
const searchById = require('./middlewares/searchByIdGet');

const route = express.Router();

route.get('/talker', SearchAll);

route.get('/talker/:id', searchById);

route.post('/login', addLogin);

module.exports = route;