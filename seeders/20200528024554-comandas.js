'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('comandas', [
      {
      pedido_id: 1,
      produto_id: 1,
      nota_fiscal: 'NF-123215/2020',
      created_at: new Date(),
      updated_at: new Date(),
      },
      {
      pedido_id: 2,
      produto_id: 2,
      nota_fiscal: 'NF-123215/2020',
      created_at: new Date(),
      updated_at: new Date(),
      },
      {
      pedido_id: 3,
      produto_id: 3,
      nota_fiscal: 'NF-123215/2020',
      created_at: new Date(),
      updated_at: new Date(),
      },
      {
      pedido_id: 4,
      produto_id: 4,
      nota_fiscal: 'NF-123215/2020',
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

    return queryInterface.bulkDelete('comandas', null, {});

  }
};