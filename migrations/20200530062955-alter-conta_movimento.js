'use strict';

module.exports = {
 up: (queryInterface, Sequelize) => {
  return queryInterface.changeColumn(
    'conta_movimentos',
    'saldo',
    {
      type: Sequelize.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.0
    }
  )
},
}
