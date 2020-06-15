'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('pagamentos', 'obervacao', 'observacao')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('pagamentos', 'observacao', 'obervacao')
  }
};
