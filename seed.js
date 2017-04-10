'use strict';

const Promise = require('bluebird');
const db = require('./db');
const Campus = require('./db/models/campus');
const Student = require('./db/models/student');

var campuses = [
    { name: 'Luna',
      image: '/images/Moon.png',
    },
    { name: 'Terra',
      image: '/images/Earth.jpg',
    },
    { name: 'Mars',
      image: '/images/Mars.jpg',
    },
    { name: 'Titan',
      image: '/images/Titan.jpg',
    }
  ];

// var students = [
//     { name: 'Gabe',
//       email: 'gabe@mhi-academy.com',
//       campusId: 1
//     },
//     { name: 'Ashi',
//       email: 'ashi@mhi-academy.com',
//       campusId: 2
//     },
//     { name: 'Dan',
//       email: 'dan@mhi-academy.com',
//       campusId: 3
//     },
//     { name: 'Marvin',
//       email: 'marvin@mhi-academy.com',
//       campusId: 4
//     },
//     { name: 'George',
//       email: 'george@mhi-academy.com',
//       campusId: 1
//     },
//     { name: 'Andrew',
//       email: 'andrew@mhi-academy.com',
//       campusId: 2
//     },
//     { name: 'Dave',
//       email: 'dave@mhi-academy.com',
//       campusId: 3
//     },
//     { name: 'Mary',
//       email: 'mary@mhi-academy.com',
//       campusId: 4
//     }
// ];

// var campuses = [
//     { name: 'Luna',
//       image: '/images/Moon.png',
//       student:
//       { name: 'Gabe',
//         email: 'gabe@mhi-academy.com',
//         campusId: 1
//       }
//     },
//     { name: 'Terra',
//       image: '/images/Earth.jpg',
//     },
//     { name: 'Mars',
//       image: '/images/Mars.jpg',
//     },
//     { name: 'Titan',
//       image: '/images/Titan.jpg',
//     }
//   ];

console.log('Syncing database');

db.sync({ force: true })
  .then(function () {
    console.log('Dropped old data and seeding database');
    const creatingCampus = campuses.map(campus =>
      Campus.create(campus));
    return Promise.all(creatingCampus);
  })
  // .then(function(){
  //   const creatingStudents = students.map(student =>
  //     Student.create(student));
  //   return Promise.all(creatingStudents);
  // })
  .then(function () {
    console.log('Seeding successful');
  })
  .catch(function(err){
    console.error(err);
  });
