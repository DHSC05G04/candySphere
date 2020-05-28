'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('pedidos', [
      {
        entrada:new Date(),
        entrega:new Date(),
        total:580.21,
        sinal:200,
        status_id:1,
        obervacao:"sem observação",
        caixa_id:1,
        cliente_id:1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        entrada:new Date(),
        entrega:new Date(),
        total:1580.21,
        sinal:700,
        status_id:1,
        obervacao:"caixinha estilizadas",
        caixa_id:2,
        cliente_id:2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        entrada:new Date(),
        entrega:new Date(),
        total:4500.87,
        sinal:2000,
        status_id:2,
        obervacao:"bolo diete",
        caixa_id:3,
        cliente_id:1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        entrada:new Date(),
        entrega:new Date(),
        total:580.21,
        sinal:200,
        status_id:1,
        obervacao:"tema do Hulk",
        caixa_id:1,
        cliente_id:1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('pedidos', null, {});
   
  }
};
