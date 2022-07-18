'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('board', {
    id : {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
    board_title :DataTypes.STRING,
    project_id :DataTypes.BIGINT,
    array : DataTypes.TEXT
}, {
timestamps: false,
// If don't want createdAt
createdAt: false,
// If don't want updatedAt
updatedAt: false
});
Board.associate = function(models) {
    // Employee.hasMany(models.salaries, {
    //     foreignKey : 'employee_id',
    //     sourceKey: 'id'
    // });
  //  Board.sync({force:true})
    console.log(models);
  // models.comment.sync({force:true})
  // models.user.sync({alter:true})
  // models.post.sync({alter:true})
  };
  return Board;
};