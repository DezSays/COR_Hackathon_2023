'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QR_Table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  QR_Table.init({
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'QR_Table',
  });
  return QR_Table;
};