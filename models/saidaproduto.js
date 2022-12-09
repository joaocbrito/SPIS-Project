'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaidaProduto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SaidaProduto.belongsTo(models.Peca)
      SaidaProduto.belongsTo(models.Saida)
    }
  }
  SaidaProduto.init({
    idPeca: DataTypes.INTEGER,
    idSaida: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SaidaProduto',
  });
  return SaidaProduto;
};