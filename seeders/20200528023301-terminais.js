'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('terminais', [{
      id:1,  
      descricao: 'caixa-1',
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        id:2,  
        descricao: 'caixa-2',
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        id:3,  
        descricao: 'caixa-3',
        created_at: new Date(),
        updated_at: new Date(),
      },

    ], {
      ignoreDuplicates: true,
      updateOnDuplicate: false,
    });

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('terminais', null, {});
   
  }
};