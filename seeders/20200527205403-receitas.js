'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('receitas',
    [
      {
        id: 1,
        descricao: 'Docinho de leite condensado e chocolate em pó, coberto com chocolate granulado',
        tempo_preparo: 40,
        rendimento: 40,
        foto: '/images/receitas/brigadeiro.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        descricao: 'Docinho de leite em pó e leite de coco',
        tempo_preparo: 30,
        rendimento: 30,
        foto: '/images/receitas/doce_de_leite',
        created_at: new Date(),
        updated_at: new Date()
      }
  ], {
    ignoreDuplicates: true,
    updateOnDuplicate: false,
    logging:true
  });

  return console.log('\x1b[32m%s\x1b[0m', 'Seeds de receitas inseridos com sucesso!')

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('receitas', null, {});
  }
};
