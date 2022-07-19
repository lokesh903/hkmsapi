'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const UserProject = sequelize.define('userproject', {
    id : {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
    
    user_id: DataTypes.BIGINT,
    project_id: DataTypes.BIGINT

}, {
timestamps: false,
// If don't want createdAt
createdAt: false,
// If don't want updatedAt
updatedAt: false
});
UserProject.associate = function(models) {
    UserProject.belongsTo(models.user, {
        foreignKey : 'user_id',
        targetKey: "id"
    });
    UserProject.belongsTo(models.project, {
      foreignKey : 'project_id',
      targetKey: "id"
  });
    models.project.hasMany(models.userproject, {
    foreignKey : 'project_id',
    sourceKey: 'id'
});
    
    // UserProject.sync({force : true})
   
    console.log(models);

  // models.comment.sync({force:true})
  // models.user.sync({alter:true})
  // models.post.sync({alter:true})
  };
  return UserProject;
};