'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('project', {
    id : {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
    
    project_title :DataTypes.STRING,
    key :DataTypes.STRING,
    client_id : DataTypes.BIGINT,
    description:DataTypes.TEXT,
    document_file: DataTypes.STRING,
    phase:DataTypes.TINYINT,
    status:DataTypes.TINYINT, 
    start_date:DataTypes.DATE,
    end_date:DataTypes.DATE,
    submit_date:DataTypes.DATE,
    budget:DataTypes.BIGINT,

}, {
timestamps: false,
// If don't want createdAt
createdAt: false,
// If don't want updatedAt
updatedAt: false
});
Project.associate = function(models) {
    // Employee.hasMany(models.salaries, {
    //     foreignKey : 'employee_id',
    //     sourceKey: 'id'
    // });
   Project.sync({force:true})
    console.log(models);
  // models.comment.sync({force:true})
  // models.user.sync({alter:true})
  // models.post.sync({alter:true})
  };
  return Project;
};