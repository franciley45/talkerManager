const express = require('express');
const addLogin = require('./CRUD/addLoginPost');
const SearchAll = require('./CRUD/searchAllGet');
const searchById = require('./CRUD/searchByIdGet');
const newSpeaker = require('./CRUD/newSpeakerPost');
const editSpeaker = require('./CRUD/editSpeakerPut');
const deleteSpeakerById = require('./CRUD/deleteSpeakerById');
const searchByIncludes = require('./CRUD/searchByIncludesGet');
const validateEmail = require('./middlewares/middlewaresloginValidation/validationEmail');
const validatePassword = require('./middlewares/middlewaresloginValidation/validationPassword');
const tokenValidation = require('./middlewares/middlewaresNewSpeaker/tokenValidation');
const nameValidation = require('./middlewares/middlewaresNewSpeaker/nameValidation');
const ageValidation = require('./middlewares/middlewaresNewSpeaker/ageValidation');
const talkValidation = require('./middlewares/middlewaresNewSpeaker/talkValidation');
const rateValidaton = require('./middlewares/middlewaresNewSpeaker/rateValidaton');

const route = express.Router();

route.get('/talker', SearchAll);

route.get('/talker/search', tokenValidation, searchByIncludes);

route.get('/talker/:id', searchById);

route.post('/login', validateEmail, validatePassword, addLogin);

route.delete('/talker/:id', tokenValidation, deleteSpeakerById);

route.put('/talker/:id',
tokenValidation, 
nameValidation, 
ageValidation, 
talkValidation, 
rateValidaton, 
editSpeaker);

route.post('/talker', 
tokenValidation, 
nameValidation, 
ageValidation, 
talkValidation, 
rateValidaton, 
newSpeaker);

module.exports = route;