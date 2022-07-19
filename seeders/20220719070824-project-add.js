'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('projects', [{
      project_title :"",
    key :"",
    phase:DataTypes.TINYINT,
    status:DataTypes.STRING, 
    start_date:DataTypes.DATE,
    end_date:DataTypes.DATE,
    submit_date:DataTypes.DATE,
    budget:DataTypes.BIGINT,
    }], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
