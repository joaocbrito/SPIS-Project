'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pecas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idNome: {
        type: Sequelize.INTEGER
      },
      idMarca: {
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.TEXT
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      imagem: {
        type: Sequelize.BLOB
      },
      valorUnitarioCusto: {
        type: Sequelize.FLOAT
      },
      valorUnitarioVenda: {
        type: Sequelize.FLOAT
      },
      idCategoria: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pecas');
  }
};