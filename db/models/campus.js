'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');
var Student = require('./student');


module.exports = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: Sequelize.STRING
}, {
  hooks: {
    beforeDestroy: function(campus){
      Student.destroy({
        where: { campusId: campus.id }
      });
    }
  }
});
