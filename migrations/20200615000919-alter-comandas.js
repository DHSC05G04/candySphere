'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'comandas',
      'quantidade',
      {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'comandas',
      'quantidade'
    )
  }
};
