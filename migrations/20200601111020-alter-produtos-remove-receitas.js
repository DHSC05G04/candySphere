'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'produtos',
      'receita_id'
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'produtos',
      'receita_id',
      {
        type: Sequelize.INTEGER.UNSIGNED
      }
    )
  }
};
