'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'estocaveis',
      'receita_id',
      {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
          table: 'receitas',
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'estocaveis',
      'receita_id'
    )
  }
};
