'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entrada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Entrada.belongsTo(models.Peca)
      Entrada.belongsTo(models.TipoEntrada)
    }
  }
  Entrada.init({
    idPeca: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    dataEntrada: DataTypes.DATEONLY,
    idTipoEntrada: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Entrada',
  });
  return Entrada;
};