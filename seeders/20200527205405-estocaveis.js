'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('estocaveis',
    [
      {
        id: 1,
        nome: 'Leite condensado',
        tipo_id: 2,
        quantidade: 5000,
        unidade_id: 4,
        custo_unitario: 2.50,
        validade: new Date(),
        vendavel: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        nome: 'Chocolate em pó',
        tipo_id: 4,
        quantidade: 850,
        unidade_id: 4,
        custo_unitario: 10.99,
        validade: new Date(),
        vendavel: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        nome: 'Manteiga',
        tipo_id: 4,
        quantidade: 750,
        unidade_id: 4,
        custo_unitario: 6.75,
        validade: new Date(),
        vendavel: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        nome: 'Chocolate granulado',
        tipo_id: 3,
        quantidade: 2000,
        unidade_id: 4,
        custo_unitario: 3.45,
        validade: new Date(),
        vendavel: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        nome: 'Leite em pó',
        tipo_id: 4,
        quantidade: 3000,
        unidade_id: 4,
        custo_unitario: 15.30,
        validade: new Date(),
        vendavel: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 6,
        nome: 'Açúcar de confeiteiro',
        tipo_id: 4,
        quantidade: 6000,
        unidade_id: 4,
        custo_unitario: 4.10,
        validade: new Date(),
        vendavel: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 7,
        nome: 'Leite de coco',
        tipo_id: 2,
        quantidade: 1250,
        unidade_id: 2,
        custo_unitario: 3.25,
        validade: new Date(),
        vendavel: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 8,
        nome: 'Brigadeiro',
        tipo_id: 1,
        quantidade: 15,
        unidade_id: 1,
        custo_unitario: 10.99,
        validade: new Date(),
        vendavel: 1,
        receita_id: 1,
        foto: '/images/produtos/brigadeiro.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 9,
        nome: 'Docinho de leite',
        tipo_id: 1,
        quantidade: 23,
        unidade_id: 1,
        custo_unitario: 3.00,
        validade: new Date(),
        vendavel: 1,
        receita_id: 2,
        foto: '/images/produtos/doce_de_leite.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 10,
        nome: 'H2O',
        tipo_id: 1,
        quantidade: 18,
        unidade_id: 1,
        custo_unitario: 8.00,
        validade: new Date(),
        vendavel: 1,
        foto: '/images/produtos/H2O.png',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 11,
        nome: 'Coca-Cola',
        tipo_id: 1,
        quantidade: 18,
        unidade_id: 1,
        custo_unitario: 3.50,
        validade: new Date(),
        vendavel: 1,
        foto: '/images/produtos/coca.png',
        created_at: new Date(),
        updated_at: new Date()
      }
  ], {
    ignoreDuplicates: true,
    updateOnDuplicate: false,
    logging:true
  });

  return console.log('\x1b[32m%s\x1b[0m', 'Seeds de estocáveis inseridos com sucesso!')

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('estocaveis', null, {});
  }
};
