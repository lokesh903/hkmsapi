'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Sprint = sequelize.define('sprint', {
    id : {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
	name : DataTypes.STRING  ,
	description : DataTypes.STRING  ,
	start_date  : DataTypes.DATE  ,
	end_date : DataTypes.DATE  ,
	actual_start_date  : DataTypes.DATE  ,
	actual_end_date  : DataTypes.DATE  ,
	status : DataTypes.STRING  ,
	milestone_id : DataTypes.BIGINT  ,
	project_id : DataTypes.BIGINT  ,
}, {
timestamps: false,
// If don't want createdAt
createdAt: false,
// If don't want updatedAt
updatedAt: false
});
Sprint.associate = function(models) {
    Sprint.hasMany(models.task, {
        foreignKey : 'sprint_id',
        sourceKey: 'id'
    });
    models.task.belongsTo(models.sprint,{
      foreignKey:"sprint_id",
      targetKey:'id'
    })
    models.milestone.hasMany(models.sprint, {
      foreignKey : 'milestone_id',
      sourceKey: 'id'
  });
  Sprint.belongsTo(models.milestone,{
    foreignKey:"milestone_id",
    targetKey:'id'
  })
  models.project.hasMany(models.sprint, {
    foreignKey : 'project_id',
    sourceKey: 'id'
});
Sprint.belongsTo(models.project,{
  foreignKey:"project_id",
  targetKey:'id'
})
    Sprint.sync({alter:true})
    
    // models.task.sync({alter:true})
    console.log(models);
  // models.comment.sync({force:true})
  // models.user.sync({alter:true})
  // models.post.sync({alter:true})
  };
  return Sprint;
};

