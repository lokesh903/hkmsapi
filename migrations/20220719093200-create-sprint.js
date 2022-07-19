'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sprints', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name : Sequelize.STRING  ,
	description : Sequelize.STRING  ,
	start_date  : Sequelize.DATE  ,
	end_date : Sequelize.DATE  ,
	actual_start_date  : Sequelize.DATE  ,
	actual_end_date  : Sequelize.DATE  ,
	status : Sequelize.STRING  ,
	milestone_id : Sequelize.BIGINT  ,
	project_id : Sequelize.BIGINT  ,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sprints');
  }
};