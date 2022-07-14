'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projects', {
      id : {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
      
      project_title :Sequelize.STRING,
      key :Sequelize.STRING,
      client_id : Sequelize.BIGINT,
      description:Sequelize.TEXT,
      document_file: Sequelize.STRING,
      phase:Sequelize.TINYINT,
      status:Sequelize.TINYINT, 
      start_date:Sequelize.DATE,
      end_date:Sequelize.DATE,
      submit_date:Sequelize.DATE,
      budget:Sequelize.BIGINT,
  
  });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('projects');
  }
};