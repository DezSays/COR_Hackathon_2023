'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mentees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      });
    }
  }
  Mentees.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    student_type: DataTypes.STRING,
    preferred_profession: DataTypes.TEXT,
    preferred_management: DataTypes.TEXT,
    preferred_counselor: DataTypes.TEXT,
    gender: DataTypes.TEXT,
    same_gender: DataTypes.BOOLEAN,
    linkedin_url: DataTypes.TEXT,
    photo_url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Mentees',
  });
  return Mentees;
};