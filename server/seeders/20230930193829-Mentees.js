"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Mentees",
      [
        {
          user_id: 1,
          name: "Hien Nguyen",
          student_type: "web dev",
          preferred_profession: "software engineer",
          preferred_management: "preferred management",
          preferred_counselor: "Ron",
          gender: "male",
          same_gender: true,
          linkedin_url: "linkedin.com/hien",
          photo_url: "hien.jpg",
        },
        {
          user_id: 2,
          name: "John Nguyen",
          student_type: "web dev",
          preferred_profession: "software engineer",
          preferred_management: "preferred management",
          preferred_counselor: "Ron",
          gender: "male",
          same_gender: true,
          linkedin_url: "linkedin.com/john",
          photo_url: "john.jpg",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
