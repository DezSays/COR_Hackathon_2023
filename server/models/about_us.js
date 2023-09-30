'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class About_us extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  About_us.init({
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'About_us',
  });
  return About_us;
};