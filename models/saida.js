'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Saida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Saida.hasMany(models.SaidaProduto)
      Saida.belongsTo(models.TipoSaida)
    }
  }
  Saida.init({
    dataSaida: DataTypes.DATEONLY,
    valorTotal: DataTypes.FLOAT,
    idTipoSaida: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Saida',
  });
  return Saida;
};