'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.createTable('pedidos', { 
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        entrada: Sequelize.DATETIME,
        entrega: Sequelize.DATETIME,
        entrega: Sequelize.DATETIME,
        total: Sequelize.DECIMAL,
        sinal: Sequelize.DECIMAL,
        obervacao: Sequelize.STRING,
        
        status_id:{
          type:Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'status'
            },
            key:'id'
          }
        },
        caixa_id:{
          type:Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'caixas'
            },
            key:'id'
          }
        },
        cliente_id:{
          type:Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'clientes'
            },
            key:'id'
          }
        },
        create_at: Sequelize.DATE,
        update_at: Sequelize.DATE,
      });
 
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.dropTable('pedidos');
 
  }
};
