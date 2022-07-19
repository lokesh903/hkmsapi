'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Milestone = sequelize.define('milestone', {
    id :{
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
	name : DataTypes.STRING ,
	description : DataTypes.STRING ,
	project_id: DataTypes.BIGINT ,
	start_date : DataTypes.DATE ,
	end_date : DataTypes.DATE ,
	due_date : DataTypes.DATE ,
	actual_start_date: DataTypes.DATE ,  
	actual_end_date: DataTypes.DATE ,  
	status : DataTypes.STRING ,
}, {
timestamps: false,
// If don't want createdAt
createdAt: false,
// If don't want updatedAt
updatedAt: false
});
Milestone.associate = function(models) {
    // Employee.hasMany(models.salaries, {
    //     foreignKey : 'employee_id',
    //     sourceKey: 'id'
    // });
    
    Milestone.belongsTo(models.project, {
      foreignKey : 'project_id',
      targetKey: 'id'
  });
  models.project.hasMany(models.milestone,{
    foreignKey:'project_id',
    sourceKey:"id"
  })

  //  Milestone.sync({alter:true})
    console.log(models);
  // models.comment.sync({force:true})
  // models.user.sync({alter:true})
  // models.post.sync({alter:true})
  };
  return Milestone;
};