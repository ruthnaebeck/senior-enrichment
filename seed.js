'use strict';

const Promise = require('bluebird');
const db = require('./db');
const Campus = require('./db/models/campus');
const Student = require('./db/models/student');

var campuses = [
    { name: 'Luna',
      image: '',
    },
    { name: 'Terra',
      image: '',
    },
    { name: 'Mars',
      image: '',
    },
    { name: 'Titan',
      image: '',
    }
  ];

var students = [
    { name: 'Gabe',
      email: 'gabe@mhi-academy.com',
      campusId: 1
    },
    { name: 'Ashi',
      email: 'ashi@mhi-academy.com',
      campusId: 2
    },
    { name: 'Dan',
      email: 'dan@mhi-academy.com',
      campusId: 3
    },
    { name: 'Marvin',
      email: 'marvin@mhi-academy.com',
      campusId: 4
    },
    { name: 'George',
      email: 'george@mhi-academy.com',
      campusId: 1
    },
    { name: 'Andrew',
      email: 'andrew@mhi-academy.com',
      campusId: 2
    },
    { name: 'Dave',
      email: 'dave@mhi-academy.com',
      campusId: 3
    },
    { name: 'Mary',
      email: 'mary@mhi-academy.com',
      campusId: 4
    }
];

function seedCampus(){
  return Promise.map(campuses, function(campus){
    return Campus.create(campus);
  }).then(results => {
    console.log('Campus Seed ran');
    return results;
  }).catch(err => console.error(err));
}

function seedStudent(){
  return Promise.map(students, function(student){
    return Student.create(student);
  }).then(results => {
    console.log('Student Seed ran');
    return results;
  }).catch(err => console.error(err));
}

console.log('Syncing database');

db.sync({ force: true })
  .then(function () {
    console.log('Dropped old and seeding database');
    return seedCampus();
  })
  .then(function(){
    return seedStudent();
  })
  .then(function () {
    console.log('Seeding successful');
  })
  .catch(function(err){
    console.error(err);
  });
