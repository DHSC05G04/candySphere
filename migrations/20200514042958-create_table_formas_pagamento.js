'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('formas_pagamento');
  }
};
