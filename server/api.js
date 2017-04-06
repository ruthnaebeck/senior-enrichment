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

api.get('/campus/:id', (req, res, next) => {
	Campus.findAll({
		include: [{
			model: Student,
			where: { campusId: req.params.id }
		}]
	}).then(campus => res.json(campus))
	.catch(next);
});

api.get('/students', (req, res, next) => {
	Student.findAll({})
	.then(students => res.send(students));
});

api.get('/student/:id', (req, res, next) => {
	Student.findById(req.params.id)
	.then(student => res.json(student));
});

module.exports = api;
