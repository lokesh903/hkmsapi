'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const TASK = sequelize.define('task', {
    id : {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
	title: DataTypes.STRING ,
	description : DataTypes.STRING ,
	project_id  : DataTypes.BIGINT ,
	parent_task_id : DataTypes.STRING ,
	status : DataTypes.BIGINT ,
	sprint_id : DataTypes.BIGINT ,
	board_id : DataTypes.BIGINT ,
	start_date : DataTypes.DATE ,
	end_date : DataTypes.DATE ,
	due_date : DataTypes.DATE ,
	created_by : DataTypes.BIGINT ,
}, {
timestamps: false,
// If don't want createdAt
createdAt: false,
// If don't want updatedAt
updatedAt: false
});
TASK.associate = function(models) {
    // Employee.hasMany(models.salaries, {
    //     foreignKey : 'employee_id',
    //     sourceKey: 'id'
    // });
    // TASK.sync({force:true})
    console.log(models);
  // models.comment.sync({force:true})
  // models.user.sync({alter:true})
  // models.post.sync({alter:true})
  };
  return TASK;
};

