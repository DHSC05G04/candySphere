'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('pagamentos', { 
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        data_pgto: Sequelize.DATETIME,
        valor: Sequelize.DECIMAL,
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
        conta_id:{
          type:Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'contas'
            },
            key:'id'
          }
        },
        formas_pagamento_id:{
          type:Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'formas_pagamentos'
            },
            key:'id'
          }
        },
        create_at: Sequelize.DATE,
        update_at: Sequelize.DATE,
      });
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('pagamentos');
    
  }
};
