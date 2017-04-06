'use strict';
const api = require('express').Router();
const db = require('../db');
const Campus = require('../db/models/campus');
const Student = require('../db/models/student');

/* -----------------  CAMPUS  ------------------ */

api.get('/campuses', (req, res, next) => {
	Campus.findAll({})
	.then(campuses => res.json(campuses));
});

api.get('/campus/:id', (req, res, next) => {
	Campus.findOne({
		include: [{ model: Student }],
		where: { id: req.params.id }
	}).then(campus => res.json(campus))
	.catch(next);
});

api.post('/campuses', (req, res, next) => {
	Campus.create(req.body)
	.then(campus => res.status(201).json(campus))
	.catch(next);
});

/* -----------------  STUDENT  ------------------ */

api.get('/students', (req, res, next) => {
	Student.findAll({
		include: [{
			model: Campus
		}]
	})
	.then(students => res.send(students));
});

api.get('/student/:id', (req, res, next) => {
	Student.findOne({
			include: [{
				model: Campus,
			}],
			where: { id: req.params.id }
		}).then(campus => res.json(campus))
		.catch(next);
});

module.exports = api;
