'use strict';
const api = require('express').Router();
const db = require('../db');
const Campus = require('../db/models/campus');
const Student = require('../db/models/student');

api.get('/hello', (req, res) => res.send({hello: 'world'}));

api.get('/campuses', (req, res, next) => {
	Campus.findAll({})
	.then(campuses => res.json(campuses));
});

api.get('/students', (req, res, next) => {
	Student.findAll({})
	.then(students => res.send(students));
});

module.exports = api;
