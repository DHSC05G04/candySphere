'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'formas_pagamento',{
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        taxa: {
          type: Sequelize.DECIMAL,
          allowNull: false,
          default: 0.00
        },
        ativo: {
          type: Sequelize.BOOLEAN,
          default: true,
        },
        created_at: {
          type:Sequelize.DATE,
          default: new Date(),
        },
        updated_at: {
          type:Sequelize.DATE,
          default: new Date(),
        },
        // Paranoid Mode
        deleted_at: {
          type:Sequelize.DATE,
          allowNull: true
        },

      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('formas_pagamento');
  }
};
