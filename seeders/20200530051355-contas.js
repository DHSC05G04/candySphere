'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('contas', [
        {
        id:1,  
        valor: 1500.55,
        aprovado:1,
        usuarios_id:1,
        created_at:new Date(),
        updated_at:new Date(),
      },
        {
        id:2,  
        valor: 11500.00,
        aprovado:1,
        usuarios_id:2,
        created_at:new Date(),
        updated_at:new Date(),
      },
        {
        id:3,  
        valor: 500.55,
        aprovado:1,
        usuarios_id:3,
        created_at:new Date(),
        updated_at:new Date(),
      },
        {
        id:4,  
        valor: 5500.55,
        aprovado:1,
        usuarios_id:1,
        created_at:new Date(),
        updated_at:new Date(),
      },
    ], {});
   
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('contas', null, {});
    
  }
};
