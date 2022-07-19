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
     return queryInterface.bulkInsert('tasks', [{
      id:1,
      title:"User_info",
      project_id:1,
      board_id:1
    },
    {
      id:2,
      title:"update login",
      project_id:1,
      board_id:1
    },
    {
      id:3,
      title:"develop login",
      project_id:1,
      board_id:1
    },
    {
      id:4,
      title:"update signup",
      project_id:1,
      board_id:1
    },
    {
      id:5,
      title:"develop signup",
      project_id:1,
      board_id:2
    },
    {
      id:6,
      title:"update register",
      project_id:1,
      board_id:2
    },
    {
      id:7,
      title:"update forgotpassword",
      project_id:1,
      board_id:2
    },
    {
      id:8,
      title:"develop register",
      project_id:1,
      board_id:2
    },
    {
      id:9,
      title:"develop forgotpassword",
      project_id:1,
      board_id:2
    },
    {
      id:10,
      title:"develop profile page",
      project_id:1,
      board_id:2
    },
    {
      id:11,
      title:"update profile page",
      project_id:1,
      board_id:3
    }]);
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('tasks', null, {});
  }
};
