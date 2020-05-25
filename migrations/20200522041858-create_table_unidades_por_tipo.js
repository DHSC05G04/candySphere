'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable(
        'unidades_por_tipo', {
          id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
          },
          tipos_itens_id:{
            type:Sequelize.INTEGER,
            alowNull: false,
            references: {
              model: 'Tipos_itens',
              key: 'id'
            },
          },
          unidades_id:{
            type:Sequelize.INTEGER,
            alowNull: false,
            references: {
              model: 'Unidades',
              key: 'id'
            },
          }
          });

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('tipos_itens_has_unidades');

  }
};
