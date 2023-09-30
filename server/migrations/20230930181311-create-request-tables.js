'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Request_Tables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mentee_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Mentees',
          key: 'id',
          as: 'mentee_id'
        }
      },
      mentor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Mentors',
          key: 'id',
          as: 'mentee_id'
        }
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Request_Tables');
  }
};