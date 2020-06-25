'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
         return queryInterface.bulkInsert('recebimentos', [
      {
        valor:1500.51,
        pedido_id:1,
        caixa_id:1,
        forma_pagamento_id:2,
        aprovado:true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        valor:2000.25,
        pedido_id:2,
        caixa_id:2,
        forma_pagamento_id:1,
        aprovado:true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        valor:9000.05,
        pedido_id:3,
        caixa_id:3,
        forma_pagamento_id:1,
        aprovado:true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {
      ignoreDuplicates: true,
      updateOnDuplicate: false,
    });
   
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('recebimentos', null, {});
    
  }
};
