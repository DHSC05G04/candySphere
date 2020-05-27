'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('unidades',
    [
      {
        id: 1,
        unidade: 'Unidade',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        unidade: 'ml',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        unidade: 'l',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        unidade: 'g',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        unidade: 'kg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 6,
        unidade: 'colher sopa',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 7,
        unidade: 'xícara de chá',
        created_at: new Date(),
        updated_at: new Date()
      }
  ], {});

  return console.log('\x1b[32m%s\x1b[0m', 'Seeds de unidades inseridos com sucesso!')

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('unidades', null, {});
  }
};
