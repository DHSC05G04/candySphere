'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('instrucoes_preparos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      instrucao: {
        type: Sequelize.STRING
      },
      receita_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'receitas',
          key: 'id'
        }
      },
      data_criacao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      data_modificacao: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('instrucoes_preparos');
  }
};