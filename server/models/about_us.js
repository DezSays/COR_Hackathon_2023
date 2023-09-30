'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class about_us extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  about_us.init({
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'about_us',
  });
  return about_us;
};