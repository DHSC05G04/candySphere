'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('conta_movimentos', [
        { id:1,
          data: new Date(),
          saldo:2000.55,
          observacao:"sem observação",
          recebimentos_id:1,
          pagamento_id:2,
          created_at:new Date(),
          updated_at:new Date(),
      },
        { id:2,
          data: new Date(),
          saldo:11200.05,
          observacao:"sem observação",
          recebimentos_id:2,
          pagamento_id:1,
          created_at:new Date(),
          updated_at:new Date(),
      },
        { id:3,
          data: new Date(),
          saldo:1200.15,
          observacao:"sem observação",
          recebimentos_id:2,
          pagamento_id:2,
          created_at:new Date(),
          updated_at:new Date(),
      },
        { id:4,
          data: new Date(),
          saldo:3200.15,
          observacao:"sem observação",
          recebimentos_id:1,
          pagamento_id:2,
          created_at:new Date(),
          updated_at:new Date(),
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('conta_movimentos', null, {});
   
  }
};
