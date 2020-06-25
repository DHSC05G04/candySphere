'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('pedidos', 'obervacao', 'observacao')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('pedidos', 'observacao', 'obervacao')
  }
};
