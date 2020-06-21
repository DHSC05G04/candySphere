'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('produtos',
    [
      {
        id: 1,
        estoque_id: 8,
        valor: 15.00,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        estoque_id: 9,
        valor: 25.00,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        estoque_id: 10,
        valor: 10.00,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        estoque_id: 11,
        valor: 5.00,
        created_at: new Date(),
        updated_at: new Date()
      }
  ], {
    ignoreDuplicates: true,
    updateOnDuplicate: false,
    logging:true
  });

  return console.log('\x1b[32m%s\x1b[0m', 'Seeds de produtos inseridos com sucesso!')

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('produtos', null, {});
  }
};
