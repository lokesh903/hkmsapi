'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userprojects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: Sequelize.BIGINT,
    project_id: Sequelize.BIGINT
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userprojects');
  }
};