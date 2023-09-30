'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lets_talk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lets_talk.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lets_talk',
  });
  return lets_talk;
};