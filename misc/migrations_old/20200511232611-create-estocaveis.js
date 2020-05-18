'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('estocaveis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      nome: {
        type: Sequelize.STRING
      },
      tipo_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'tipos_itens',
          key: 'id'
        }
      },
      quantidade: {
        type: Sequelize.DECIMAL
      },
      unidade_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'unidades',
          key: 'id'
        }
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
    return queryInterface.dropTable('estocaveis');
  }
};