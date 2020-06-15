'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'clientes', [
        {
          id: 1,
          cpf: '00000000000',
          nome: 'John Doe (ADMIN)',
          email: 'dhsc.candysphere@gmail.com',
          endereco: 'Rua dos Patos',
          telefone: '119999-8877',
          created_at: '2020-05-26 00:00:00',
          updated_at: '2020-05-26 00:00:00',
        },
        {
          id: 2,
          cpf: '11111111111',
          nome: "Alessandro Barbosa Vitorio",
          email: "asovitorio@gmail.com",
          endereco: 'Rua 01',
          telefone: '11954965202',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          cpf: '22222222222',
          nome: "Leonardo Laferrera de Souza",
          email: "llsouza.br@gmail.com",
          endereco: 'Rua 02',
          telefone: '11981264775',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          cpf: '33333333333',
          nome: "Rupert A Stapf",
          email: "rastapf@gmail.com",
          endereco: 'Rua 03',
          telefone: '12991270706',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          cpf: '44444444444',
          nome: "Alcindo",
          email: "alcindo@gmail.com",
          endereco: 'Rua 04',
          telefone: '',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {
        ignoreDuplicates: true,
        updateOnDuplicate: false,
        logging:true
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('clientes', null, {});
  }
};

