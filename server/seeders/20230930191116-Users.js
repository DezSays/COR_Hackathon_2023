'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: "Dez Bryan",
      email: "dez@dez.com",
      role: "Mentor"
    },
    {
      name: "Larry King",
      email: "larry@king.com",
      role: "Mentee"
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
