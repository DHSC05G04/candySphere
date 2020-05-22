'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable(
     'pedidos',{
       id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        dt_entrada: {
          type: Sequelize.DATE,
          allowNull: false,
          default: new Date(),
        },
        dt_entrega: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        vlr_total: {
          type: Sequelize.DECIMAL(11,2),
          default: 0.00,
        },
        vlr_sinal: {
          type: Sequelize.DECIMAL(11,2),
          default: 0.00,
        },
        status_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'status',
            key: 'id'
          },
        },
        observacao:{
          type: Sequelize.STRING(1024),
          allowNull: true,
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
    return queryInterface.dropTable('pedidos');
  }
};
