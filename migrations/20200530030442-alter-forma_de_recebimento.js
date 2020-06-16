'use strict';

module.exports = {
 up: (queryInterface, Sequelize) => {
  return queryInterface.changeColumn(
    'recebimentos',
    'valor',
    {
      type: Sequelize.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.0
    }
  )
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'recebimentos',
      'valor',
      {
        type: Sequelize.DECIMAL(10,0),
        allowNull: true,
        defaultValue: 0
      }
    )
  }
}
