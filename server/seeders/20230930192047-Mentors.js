'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Mentors', [{
    user_id: 1,
    name: 'Tony Vu',
    profession:'data analyst',
    gender:'male',
    management: true,
    counselor: 'counselor',
    same_gender:true,
    linkedin_url:'linkedin.com/tonyvuu',
    photo_url:'tony.jpg',
    },
    {
    user_id: 2,
    name: 'Kenny Pham',
    profession:'junior software engineer',
    gender:'male',
    management: true,
    counselor: 'counselor',
    same_gender:true,
    linkedin_url:'linkedin.com/kennypham',
    photo_url:'kenny.jpg',

    }
  
  ], {});
   
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
