'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mentors', {
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
      profession: {
        type: Sequelize.TEXT
      },
      gender: {
        type: Sequelize.TEXT
      },
      management: {
        type: Sequelize.BOOLEAN
      },
      
      counselor: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Mentors');
  }
};