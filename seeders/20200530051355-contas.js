'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('contas', [
        {
        id:1,  
        valor: 148.55,
        aprovado:true,
        usuarios_id:1,
        created_at:new Date(),
        updated_at:new Date(),
        descricao:"Conta de Luz"
      },
        {
        id:2,  
        valor: 185.56,
        aprovado:true,
        usuarios_id:2,
        created_at:new Date(),
        updated_at:new Date(),
        descricao:"Conta de Gás"
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
        valor: 600.55,
        aprovado:true,
        usuarios_id:1,
        created_at:new Date(),
        updated_at:new Date(),
        descricao:"Fornecedor de Bebida"
      },
      {
      id:5,  
      valor: 25.99,
      aprovado:true,
      usuarios_id:2,
      created_at:new Date(),
      updated_at:new Date(),
      descricao:"Conta de Telefone"
    }
    ], {
      ignoreDuplicates: true,
      updateOnDuplicate: false,
    });
   
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('contas', null, {});
    
  }
};
