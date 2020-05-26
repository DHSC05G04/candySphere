'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.changeColumn(
      'funcionarios',
      'salario',
      {
        type: Sequelize.DECIMAL(11,2),
        allowNull: false,
        defaultValue: 0.0
      }
    )

  }
};
