'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('estocaveis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      tipo_id: {
        type: Sequelize.INTEGER
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      unidade_id: {
        type: Sequelize.INTEGER
      },
      custo_unitario: {
        type: Sequelize.DECIMAL
      },
      validade: {
        type: Sequelize.DATE
      },
      vendavel: {
        type: Sequelize.BOOLEAN
      },
      data_criacao: {
        type: Sequelize.DATE
      },
      data_modificacao: {
        type: Sequelize.DATE
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('estocaveis');
  }
};