'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Intake_Forms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Intake_Forms.belongsTo(Users, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
    }
  }
  Intake_Forms.init({
    user_id: DataTypes.INTEGER,
    question: DataTypes.TEXT,
    answer: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Intake_Forms',
  });
  return Intake_Forms;
};