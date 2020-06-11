'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'receitas',
      'nome'
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'receitas',
      'nome',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    )
  }
};
