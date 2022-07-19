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
     return queryInterface.bulkInsert('milestones', [{
      name : "level1",
      project_id:  1,
      status : "Active" ,
     },{
      name : "level2",
      project_id:  1,
      status : "Active" ,
     },{
      name : "level3",
      project_id:  1,
      status : "Active" ,
     },{
      name : "level4",
      project_id:  1,
      status : "Pending" ,
     }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.dropTable('milestones');
  }
};
