'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('terminais', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      descricao: Sequelize.STRING,

      pedido_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'pedidos'
          },
          key: 'id'
        }
      },
      create_at: Sequelize.DATE,
      update_at: Sequelize.DATE,
    });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('terminais');

  }
};