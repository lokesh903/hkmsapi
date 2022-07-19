'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('milestones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name : Sequelize.STRING ,
	description : Sequelize.STRING ,
	project_id: Sequelize.BIGINT ,
	start_date : Sequelize.DATE ,
	end_date : Sequelize.DATE ,
	due_date : Sequelize.DATE ,
	actual_start_date: Sequelize.DATE ,  
	actual_end_date: Sequelize.DATE ,  
	status : Sequelize.STRING ,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('milestones');
  }
};