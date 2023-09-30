'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lets_talks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lets_talks.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lets_talks',
  });
  return Lets_talks;
};