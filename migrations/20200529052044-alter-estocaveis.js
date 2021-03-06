'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'estocaveis',
      'custo_unitario',
      {
        type: Sequelize.DECIMAL(11,2),
        allowNull: true,
        defaultValue: 0.0
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'estocaveis',
      'custo_unitario',
      {
        type: Sequelize.DECIMAL(11,0),
        allowNull: true,
        defaultValue: 0
      }
    )
  }
};
