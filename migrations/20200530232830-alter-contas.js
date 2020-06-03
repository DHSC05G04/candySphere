'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.addColumn('contas','descricao',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
      );
  
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('contas', 'descricao')
}
}
