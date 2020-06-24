'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('contas', [
        {
        id:1,  
        valor: 1500.55,
        aprovado:true,
        usuarios_id:1,
        created_at:new Date(),
        updated_at:new Date(),
        descricao:"Conta de Luz"
      },
        {
        id:2,  
        valor: 11500.00,
        aprovado:true,
        usuarios_id:2,
        created_at:new Date(),
        updated_at:new Date(),
        descricao:"Folha de Pagamento"
      },
        {
        id:3,  
        valor: 500.55,
        aprovado:true,
        usuarios_id:3,
        created_at:new Date(),
        updated_at:new Date(),
        descricao:"Fornecedor de Farinha"
      },
        {
        id:4,  
        valor: 5500.55,
        aprovado:true,
        usuarios_id:1,
        created_at:new Date(),
        updated_at:new Date(),
        descricao:"Fornecedor de Bebida"
      },
    ], {
      ignoreDuplicates: true,
      updateOnDuplicate: false,
    });
   
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('contas', null, {});
    
  }
};
