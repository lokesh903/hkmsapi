'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const array = JSON.stringify([
      {
        id: '1',
        name: 'Mary S. Navarre',
        content: 'Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing.'
      },
      {
        id: '2',
        name: 'Samuel M. Ellis',
        content: 'Toffee powder marzipan tiramisu. Cake cake dessert danish.'
      },
      {
        id: '3',
        name: 'Sandra C. Toney',
        content: 'Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupa.'
      },
      {
        id: '4',
        name: 'Cleveland C. Goins',
        content: 'Toffee powder marzipan tiramisu. Cake cake dessert danish.'
      },
      {
        id: '5',
        name: 'Linda M. English',
        content: 'Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing.'
      }
    ])
    const array2 = JSON.stringify([
      {
        id: '6',
        name: 'Mary S. Navarre',
        content: 'Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing.'
      },
      {
        id: '7',
        name: 'Samuel M. Ellis',
        content: 'Toffee powder marzipan tiramisu. Cake cake dessert danish.'
      },
      {
        id: '8',
        name: 'Sandra C. Toney',
        content: 'Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupa.'
      },
      {
        id: '9',
        name: 'Cleveland C. Goins',
        content: 'Toffee powder marzipan tiramisu. Cake cake dessert danish.'
      },
      {
        id: '10',
        name: 'Linda M. English',
        content: 'Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing.'
      }
    ])
    return queryInterface.bulkInsert('boards', [{
      id:1,
      board_title:"User_info",
      project_id:1,
      array:array
    },
    {
      id:2,
      board_title:"User_info",
      project_id:1,
      array:array2
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('boards', null, {});
  }
};
