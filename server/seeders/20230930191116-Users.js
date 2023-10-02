'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: "Dez Bryan",
      email: "dez@dez.com",
      password: await bcrypt.hash("password", 10),
      role: "Mentor"
    },
    {
      name: "Larry King",
      email: "larry@king.com",
      password: await bcrypt.hash('password1', 10),
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
