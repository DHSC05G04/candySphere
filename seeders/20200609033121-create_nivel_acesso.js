'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('nivel_acessos', [{
        id: 0,
        is_admin: false,
        descricao: 'Sem Acesso'
      },
      {
        id:1,
        is_admin: true,
        descricao: 'Administrador'
      },
      {
        id:2,
        is_admin:false,
        descricao: 'Caixa'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('nivel_acesso', null, {});
  }
};
