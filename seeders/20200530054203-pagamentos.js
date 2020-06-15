'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('pagamentos', [
      {
        id: 1,
        data_pgto: new Date(),
        valor: 250.22,
        observacao: "Nota fiscal nº1234565",
        status_id: 1,
        conta_id:2,
        formas_pagamento_id:1,
        created_at:new Date(),
        updated_at:new Date(),
      },
      {
        id: 2,
        data_pgto: new Date(),
        valor: 2321.22,
        observacao: "Nota fiscal nº1234565",
        status_id: 1,
        conta_id:3,
        formas_pagamento_id:2,
        created_at:new Date(),
        updated_at:new Date(),
      },
      {
        id: 3,
        data_pgto: new Date(),
        valor: 1000.50,
        observacao: "Nota fiscal nº1234565",
        status_id: 1,
        conta_id:1,
        formas_pagamento_id:1,
        created_at:new Date(),
        updated_at:new Date(),
      },
      {
        id: 4,
        data_pgto: new Date(),
        valor: 1000.152,
        observacao: "Nota fiscal nº1234565",
        status_id: 1,
        conta_id:1,
        formas_pagamento_id:2,
        created_at:new Date(),
        updated_at:new Date(),
      },
      

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('pagamentos', null, {});
  }
};