'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request_Tables extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Request_Tables.belongsTo(models.Mentors, {
        foreignKey: 'mentor_id',
        onDelete: 'CASCADE'
      });
      Request_Tables.belongsTo(models.Mentees, {
        foreignKey: 'mentee_id',
        onDelete: 'CASCADE'
      })
    }
  }
  Request_Tables.init({
    mentee_id: DataTypes.INTEGER,
    mentor_id: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Request_Tables',
  });
  return Request_Tables;
};