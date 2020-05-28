'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('status', [
      {
      descricao: 'aberta',
    },
      {
      descricao: 'fechada',
    },
      {
      descricao: 'cancelada',
    },
   ], {});

  },

  down: (queryInterface, Sequelize) => {
   

    
      return queryInterface.bulkDelete('status', null, {});
   
  }
};