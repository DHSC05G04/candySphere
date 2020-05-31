'use strict';

module.exports = {
 up: (queryInterface, Sequelize) => {
  return queryInterface.changeColumn(
    'formas_pagamento',
    'taxa',
    {
      type: Sequelize.DECIMAL(10,5),
      allowNull: true,
      defaultValue: 0.0
    }
  )
},
}
