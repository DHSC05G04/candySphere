'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('pedidos', [
      {
        id:1,
        entrada:new Date(),
        entrega:new Date(),
        total:580.21,
        sinal:200,
        status_id:1,
        observacao:"sem observação",
        caixa_id:1,
        cliente_id:1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:2,
        entrada:new Date(),
        entrega:new Date(),
        total:1580.21,
        sinal:700,
        status_id:1,
        observacao:"caixinha estilizadas",
        caixa_id:2,
        cliente_id:2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:3,
        entrada:new Date(),
        entrega:new Date(),
        total:4500.87,
        sinal:2000,
        status_id:2,
        observacao:"bolo diet",
        caixa_id:3,
        cliente_id:1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:4,
        entrada:new Date(),
        entrega:new Date(),
        total:580.21,
        sinal:200,
        status_id:1,
        observacao:"tema do Hulk",
        caixa_id:1,
        cliente_id:1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {
      ignoreDuplicates: true,
      updateOnDuplicate: false,
      logging:true
    });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('pedidos', null, {});
   
  }
};
