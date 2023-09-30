'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mentors extends Model {
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
  Mentors.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    profession: DataTypes.TEXT,
    gender: DataTypes.TEXT,
    management: DataTypes.TEXT,
    management: DataTypes.TEXT,
    counselor: DataTypes.TEXT,
    same_gender: DataTypes.BOOLEAN,
    linkedin_url: DataTypes.TEXT,
    photo_url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Mentors',
  });
  return Mentors;
};