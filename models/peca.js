'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peca extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Peca.belongsTo(models.Nome)
      Peca.belongsTo(models.Marca)
      Peca.belongsTo(models.Categoria)
      Peca.hasMany(models.ModeloPeca)
      Peca.hasMany(models.Entrada)
      Peca.hasMany(models.SaidaProduto)
    }
  }
  Peca.init({
    idNome: DataTypes.INTEGER,
    idMarca: DataTypes.INTEGER,
    descricao: DataTypes.TEXT,
    quantidade: DataTypes.INTEGER,
    imagem: DataTypes.BLOB,
    valorUnitarioCusto: DataTypes.FLOAT,
    valorUnitarioVenda: DataTypes.FLOAT,
    idCategoria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Peca',
  });
  return Peca;
};