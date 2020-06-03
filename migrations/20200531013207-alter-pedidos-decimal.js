'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'pedidos',
      'total',
      {
        type: Sequelize.DECIMAL(10,2),
        allowNull: true,
        defaultValue: 0.0
      }
    );

    return await queryInterface.changeColumn(
      'pedidos',
      'sinal',
      {
        type: Sequelize.DECIMAL(10,2),
        allowNull: true,
        defaultValue: 0.0        
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'pedidos',
      'total',
      {
        type: Sequelize.DECIMAL(10,0),
        allowNull: true,
        defaultValue: 0.0
      }
    );

    return await queryInterface.changeColumn(
      'pedidos',
      'sinal',
      {
        type: Sequelize.DECIMAL(10,0),
        allowNull: true,
        defaultValue: 0.0        
      }
    )
  }
};
