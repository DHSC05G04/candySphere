'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('recebimentos', {
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        valor: Sequelize.DECIMAL,
        aprovado: Sequelize.BINARY,
        
        pedido_id:{
          type:Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'pedidos'
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
        forma_pagamento_id:{
          type:Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'forma_pagamentos'
            },
            key:'id'
          }
        },
        create_at: Sequelize.DATE,
        update_at: Sequelize.DATE,

      });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('recebimentos');
    
  }
};
