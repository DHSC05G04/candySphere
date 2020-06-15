'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tipos_itens',
    [
      {
        id: 1,
        tipo: "Unitário",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        tipo: "Líquidos",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        tipo: "Grãos",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        tipo: "Sólidos",
        created_at: new Date(),
        updated_at: new Date()
      }
  ], {
    ignoreDuplicates: true,
    updateOnDuplicate: false,
    logging:true
  });

  return console.log('\x1b[32m%s\x1b[0m', 'Seeds de tipos inseridos com sucesso!')

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tipos_itens', null, {});
  }
};
