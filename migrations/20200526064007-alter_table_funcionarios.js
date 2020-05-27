'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.changeColumn(
      'funcionarios',
      'salario',
      {
        type: Sequelize.DECIMAL(11,2),
        allowNull: true,
        defaultValue: 0.0
      }
    )

  }
};
