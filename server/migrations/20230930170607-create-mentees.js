'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mentees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          as: 'user_id'
        }
      },
      name: {
        type: Sequelize.TEXT
      },
      student_type: {
        type: Sequelize.STRING
      },
      preferred_profession: {
        type: Sequelize.TEXT
      },
      preferred_management: {
        type: Sequelize.TEXT
      },
      preferred_counselor: {
        type: Sequelize.TEXT
      },
      gender:{
        type:Sequelize.TEXT
      },
      same_gender: {
        type: Sequelize.BOOLEAN
      },
      linkedin_url: {
        type: Sequelize.TEXT
      },
      photo_url: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Mentees');
  }
};