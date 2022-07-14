'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id : {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
      
      email :Sequelize.STRING,
      password :Sequelize.STRING,
      name:Sequelize.STRING,
      remember_tocken :Sequelize.STRING,
      api_token :Sequelize.STRING,
      facebook_id :Sequelize.STRING,
      google_id :Sequelize.STRING,
      profile_pic : Sequelize.STRING,
      user_type:Sequelize.STRING,
      phone_no:Sequelize.BIGINT,
      join_date:Sequelize.DATE,
      leave_date:Sequelize.DATE,
      work_email: Sequelize.STRING,
      website: Sequelize.STRING,
      company_name: Sequelize.STRING,
      address_id:Sequelize.BIGINT,
      card_id:Sequelize.BIGINT,
      designation_id:Sequelize.BIGINT,
      monthly_sallary:Sequelize.BIGINT,
      parmanent_address_id:Sequelize.BIGINT,
      start_date:Sequelize.DATE,
      qualification: Sequelize.STRING,
  
  });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};