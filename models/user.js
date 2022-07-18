'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id : {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
    
    email :DataTypes.STRING,
    password :DataTypes.STRING,
    name:DataTypes.STRING,
    remember_tocken :DataTypes.STRING,
    api_token :DataTypes.STRING,
    facebook_id :DataTypes.STRING,
    google_id :DataTypes.STRING,
    status :DataTypes.STRING,
    profile_pic : DataTypes.STRING,
    user_type:DataTypes.STRING,
    phone_no:DataTypes.BIGINT,
    join_date:DataTypes.DATE,
    leave_date:DataTypes.DATE,
    work_email: DataTypes.STRING,
    website: DataTypes.STRING,
    company_name: DataTypes.STRING,
    address_id:DataTypes.BIGINT,
    card_id:DataTypes.BIGINT,
    designation_id:DataTypes.BIGINT,
    monthly_sallary:DataTypes.BIGINT,
    parmanent_address_id:DataTypes.BIGINT,
    start_date:DataTypes.DATE,
    qualification: DataTypes.STRING,

}, {
timestamps: false,
// If don't want createdAt
createdAt: false,
// If don't want updatedAt
updatedAt: false
});
User.associate = function(models) {
    // Employee.hasMany(models.salaries, {
    //     foreignKey : 'employee_id',
    //     sourceKey: 'id'
    // });
//  User.sync({force:true})
    console.log(models);
  // models.comment.sync({force:true})
  // models.user.sync({alter:true})
  // models.post.sync({alter:true})
  };
  return User;
};