'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'funcionarios', [
        {
          id: 1,
          nome: 'John Doe (ADMIN)',
          email: 'dhsc.candysphere@gmail.com',
          telefone: '119999-8877',
          salario: 10000.00,
          created_at: '2020-05-26 00:00:00',
          updated_at: '2020-05-26 00:00:00',
        },
        {
          id: 2,
          nome: "Alessandro Barbosa Vitorio",
          email: "asovitorio@gmail.com",
          telefone: '11954965202',
          salario: 9876.54,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          nome: "Leonardo Laferrera de Souza",
          email: "llsouza.br@gmail.com",
          telefone: '11981264775',
          salario: 1059.38,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          nome: "Rupert A Stapf",
          email: "rastapf@gmail.com",
          telefone: '12991270706',
          salario: 9192.4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          nome: "Alcindo",
          email: "alcindo@gmail.com",
          telefone: '',
          salario: 900,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {}
    );

  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('funcionarios', null, {});

  }
};
