const express = require('express');
const SearchAll = require('./middlewares/SearchAll');

const route = express.Router();

route.get('/talker', SearchAll);

module.exports = route;