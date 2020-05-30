'use strict';

module.exports = {
 up: (queryInterface, Sequelize) => {
  return queryInterface.changeColumn(
    'contas',
    'valor',
    {
      type: Sequelize.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.0
    }
  )
},
}
