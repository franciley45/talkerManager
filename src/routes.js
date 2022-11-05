const express = require('express');
const addLogin = require('./middlewares/addLoginPost');
const validateEmail = require('./middlewares/middlewaresloginValidation/validationEmail');
const validatePassword = require('./middlewares/middlewaresloginValidation/validationPassword');
const SearchAll = require('./middlewares/SearchAllGet');
const searchById = require('./middlewares/searchByIdGet');
const newSpeaker = require('./middlewares/newSpeakerPost');
const tokenValidation = require('./middlewares/middlewaresNewSpeaker/tokenValidation');
const nameValidation = require('./middlewares/middlewaresNewSpeaker/nameValidation');
const ageValidation = require('./middlewares/middlewaresNewSpeaker/ageValidation');
const talkValidation = require('./middlewares/middlewaresNewSpeaker/talkValidation');
const rateValidaton = require('./middlewares/middlewaresNewSpeaker/rateValidaton');

const route = express.Router();

route.get('/talker', SearchAll);

route.get('/talker/:id', searchById);

route.post('/login', validateEmail, validatePassword, addLogin);

route.post('/talker', 
tokenValidation, 
nameValidation, 
ageValidation, 
talkValidation, 
rateValidaton, 
newSpeaker);

module.exports = route;