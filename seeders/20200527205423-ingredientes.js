'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ingredientes',
    [
      {
        id: 1,
        estoque_id: 1,
        quantidade: 395,
        unidade_id: 4,
        receita_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: 2,
        estoque_id: 2,
        quantidade: 3,
        unidade_id: 6,
        receita_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: 3,
        estoque_id: 3,
        quantidade: 1,
        unidade_id: 6,
        receita_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: 4,
        estoque_id: 4,
        quantidade: 1,
        unidade_id: 7,
        receita_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: 5,
        estoque_id: 5,
        quantidade: 2,
        unidade_id: 7,
        receita_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: 6,
        estoque_id: 6,
        quantidade: 2,
        unidade_id: 6,
        receita_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: 7,
        estoque_id: 7,
        quantidade: 5,
        unidade_id: 6,
        receita_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }

  ], {});

  return console.log('\x1b[32m%s\x1b[0m', 'Seeds de ingredientes inseridos com sucesso!')

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ingredientes', null, {});    
  }
};
