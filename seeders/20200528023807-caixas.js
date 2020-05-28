'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('caixas', [
      {
        terminal_id:1,
        hora_abertura:'2020-05-28 07:32:33',
        hora_fechamento:'2020-05-28 15:32:33',
        usuario_id:1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        terminal_id:2,
        hora_abertura:'2020-05-28 07:32:33',
        hora_fechamento:'2020-05-28 15:32:33',
        usuario_id:2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        terminal_id:3,
        hora_abertura:'2020-05-28 07:32:33',
        hora_fechamento:'2020-05-28 15:32:33',
        usuario_id:3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
   
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('caixas', null, {});
 
  }
};
