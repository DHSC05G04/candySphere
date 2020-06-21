'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('unidades_por_tipos', [
      {
        id: 1,
        tipo_id: 1,
        unidade_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        tipo_id: 2,
        unidade_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        tipo_id: 2,
        unidade_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        tipo_id: 2,
        unidade_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        tipo_id: 2,
        unidade_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 6,
        tipo_id: 3,
        unidade_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 7,
        tipo_id: 3,
        unidade_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 8,
        tipo_id: 3,
        unidade_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 9,
        tipo_id: 3,
        unidade_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 10,
        tipo_id: 4,
        unidade_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 11,
        tipo_id: 4,
        unidade_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 12,
        tipo_id: 4,
        unidade_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 13,
        tipo_id: 4,
        unidade_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      }
    ],{
      ignoreDuplicates: true,
      updateOnDuplicate: false,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('unidades_por_tipos', null, {});
  }
};
