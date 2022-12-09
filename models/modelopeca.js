'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ModeloPeca extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ModeloPeca.belongsTo(models.Modelo)
      ModeloPeca.belongsTo(models.Peca)
    }
  }
  ModeloPeca.init({
    idModelo: DataTypes.INTEGER,
    idPeca: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ModeloPeca',
  });
  return ModeloPeca;
};