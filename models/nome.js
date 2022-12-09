'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nome extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Nome.hasMany(models.Peca)
    }
  }
  Nome.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nome',
  });
  return Nome;
};