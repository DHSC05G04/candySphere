'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.dropTable('unidades_por_tipo');

    return queryInterface.createTable('unidades_por_tipos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      tipo_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'tipos_itens',
          key: 'id'          
        }
      },
      unidade_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'unidades',
          key: 'id'          
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        default: new Date()
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        default: new Date()
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('unidades_por_tipos');
  }
};