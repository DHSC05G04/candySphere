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
   ], {
    ignoreDuplicates: true,
    updateOnDuplicate: false,
    logging:true
   });

  },

  down: (queryInterface, Sequelize) => {
   

    
      return queryInterface.bulkDelete('status', null, {});
   
  }
};