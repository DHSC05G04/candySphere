'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('conta_movimentos', 'obervacao', 'observacao')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('conta_movimentos', 'observacao', 'obervacao')
  }
};
