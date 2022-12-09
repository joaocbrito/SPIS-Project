'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoSaida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TipoSaida.hasMany(models.Saida)
    }
  }
  TipoSaida.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoSaida',
  });
  return TipoSaida;
};