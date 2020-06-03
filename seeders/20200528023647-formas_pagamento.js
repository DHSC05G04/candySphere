'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('formas_pagamento', [
        {id:1,
        descricao: 'Dinheiro',
        taxa: 0,
        ativo:1,
        created_at: new Date(),
        updated_at: new Date(),
      },
        {
          id:2,
        descricao: 'Debito',
        taxa: 0.015,
        ativo:1,
        created_at: new Date(),
        updated_at: new Date(),
      },
        {
          id:3,
        descricao: 'Cartão de Credito',
        taxa: 0.035,
        ativo:1,
        created_at: new Date(),
        updated_at: new Date(),
      },
        {
          id:4,
        descricao: 'Ticket',
        taxa: 0.07,
        ativo:1,
        created_at: new Date(),
        updated_at: new Date(),
      },
        {id:5,
        descricao: 'Boleto',
        taxa: 0.03,
        ativo:1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('formas_pagamento', null, {});
    
  }
};
