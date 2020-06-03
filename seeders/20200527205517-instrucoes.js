'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('instrucoes_preparos',
    [
      {
        id: 1,
        instrucao: 'Em uma panela, coloque o leite condensado com o chocolate em pó e a manteiga.',
        receita_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        instrucao: 'Misture bem e leve ao fogo baixo, mexendo sempre até desprender do fundo da panela (cerca de 10 minutos).',
        receita_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        instrucao: 'Retire do fogo, passe para um prato untado com manteiga e deixe esfriar.',
        receita_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        instrucao: 'Com as mãos untadas, enrole em bolinhas e passe-as no granulado.',
        receita_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        instrucao: 'Em um recipiente, misture o leite em pó com o açúcar de confeiteiro e adicione, aos poucos, o leite de coco, mexendo sempre até que a massa solte das mãos.',
        receita_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 6,
        instrucao: 'Com as mãos umedecidas, enrole em bolinhas e passe no leite em pó.',
        receita_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }
  ], {});

  return console.log('\x1b[32m%s\x1b[0m', 'Seeds de instruções inserido com sucesso!')

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('instrucoes_preparos', null, {});
  }
};
