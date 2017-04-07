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

api.delete('/campuses/:id', (req, res, next) => {
	Campus.destroy({
		where: { id: req.params.id }})
	.then(campus =>
		res.status(204).send(campus + ' campus deleted'))
	.catch(next);
});

api.put('/campus/:id', (req, res, next) => {
	Campus.update(req.body,
		{where: {id: req.params.id }})
	.then(campus =>
		res.status(200).send(campus + ' campus updated'))
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

api.post('/students', (req, res, next) => {
	Student.create(req.body)
	.then(student => res.status(201).json(student))
	.catch(next);
});

api.delete('/students/:id', (req, res, next) => {
	Student.destroy({
		where: { id: req.params.id }})
	.then(student =>
		res.status(204).send(student + ' student deleted'))
	.catch(next);
});

module.exports = api;
