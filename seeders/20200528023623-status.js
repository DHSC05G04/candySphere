'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('status', [
      {id:1,
      descricao: 'aberta',
    },
      {id:2,
      descricao: 'fechada',
    },
      {id:3,
      descricao: 'cancelada',
    },
   ], {});

  },

  down: (queryInterface, Sequelize) => {
   

    
      return queryInterface.bulkDelete('status', null, {});
   
  }
};