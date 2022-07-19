'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
  title: Sequelize.STRING ,
	description : Sequelize.STRING ,
	project_id  : Sequelize.BIGINT ,
	parent_task_id : Sequelize.STRING ,
	status : Sequelize.BIGINT ,
	sprint_id : Sequelize.BIGINT ,
  board_id : Sequelize.BIGINT ,
	start_date : Sequelize.DATE ,
	end_date : Sequelize.DATE ,
	due_date : Sequelize.DATE ,
	created_by : Sequelize.BIGINT ,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};