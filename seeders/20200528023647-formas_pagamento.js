'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('formas_pagamento', [
        {
        descricao: 'Dinheiro',
        taxa: 0,
        ativo:1,
        created_at: new Date(),
        updated_at: new Date(),
      },
        {
        descricao: 'Debito',
        taxa: 0.015,
        ativo:1,
        created_at: new Date(),
        updated_at: new Date(),
      },
        {
        descricao: 'Cartão de Credito',
        taxa: 0.035,
        ativo:1,
        created_at: new Date(),
        updated_at: new Date(),
      },
        {
        descricao: 'Ticket',
        taxa: 0.07,
        ativo:1,
        created_at: new Date(),
        updated_at: new Date(),
      },
        {
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
