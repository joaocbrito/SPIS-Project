'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoEntrada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TipoEntrada.hasMany(models.Entrada)
    }
  }
  TipoEntrada.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoEntrada',
  });
  return TipoEntrada;
};