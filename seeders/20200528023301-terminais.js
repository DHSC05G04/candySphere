'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('terminais', [{
        descricao: 'caixa-1',
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        descricao: 'caixa-2',
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        descricao: 'caixa-3',
        created_at: new Date(),
        updated_at: new Date(),
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('terminais', null, {});
   
  }
};