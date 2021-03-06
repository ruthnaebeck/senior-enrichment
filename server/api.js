'use strict';
const api = require('express').Router();
const db = require('../db');
const Campus = require('../db/models/campus');
const Student = require('../db/models/student');

/* -----------------  CAMPUS  ------------------ */

api.get('/campuses', (req, res, next) => {
	Campus.findAll({
		order: 'id'
	})
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
		where: { id: req.params.id },
		individualHooks: true
	})
	.then(campus =>
		res.status(204).send(campus + ' campus deleted'))
	.catch(next);
});

api.put('/campus/:id', (req, res, next) => {
	Campus.update(req.body,
		{ where: {id: req.params.id} })
	.then(() => {
		return Campus.findOne({
			include: [{ model: Student }],
			where: { id: req.params.id }
		});
	})
	.then(campus =>
		res.status(200).json(campus))
	.catch(next);
});

/* -----------------  STUDENT  ------------------ */

api.get('/students', (req, res, next) => {
	Student.findAll({
		include: [{ model: Campus }],
		order: 'id'
	})
	.then(students => res.send(students));
});

api.get('/student/:id', (req, res, next) => {
	Student.findOne({
			where: { id: req.params.id },
			include: [Campus]
		}).then(student => res.json(student))
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

api.put('/student/:id', (req, res, next) => {
	Student.update(req.body,
		{ where: {id: req.params.id} })
	.then(() => {
		return Student.findOne({
			include: [{ model: Campus }],
			where: { id: req.params.id }
		});
	})
	.then(student =>
		res.status(200).json(student))
	.catch(next);
});

/* -----------------  SEED  ------------------ */

var items = [
    { name: 'Luna',
      image: '/images/Moon.png',
      students: [
				{ name: 'Gabe',
					email: 'gabe@mhi-academy.com',
				}
			]
    },
    { name: 'Terra',
      image: '/images/Earth.jpg',
			students: [
				{ name: 'Ashi',
					email: 'ashi@mhi-academy.com',
				}
			]
    },
    { name: 'Mars',
      image: '/images/Mars.jpg',
			students: [
				{ name: 'Dan',
					email: 'dan@mhi-academy.com',
				}
			]
    },
    { name: 'Titan',
      image: '/images/Titan.jpg',
			students: [
				{ name: 'Marvin',
					email: 'marvin@mhi-academy.com',
				}
			]
    }
  ];

api.get('/seed', (req, res, next) => {
	const createSeed = items.map(item =>
		Campus.create(item, { include: [Student] }));
	return Promise.all(createSeed)
	.then(results => res.status(201).json(results))
	.catch(next);
});

module.exports = api;
