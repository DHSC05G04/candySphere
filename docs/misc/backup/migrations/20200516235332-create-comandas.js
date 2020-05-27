'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      Example:
      return queryInterface.createTable('comandas', { 
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nota_fiscal: Sequelize.STRING,
        
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
        produto_id:{
          type:Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'produtos'
            },
            key:'id'
          }
        },
        create_at: Sequelize.DATE,
        update_at: Sequelize.DATE,
      });
  
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('comandas');
   
  }
};
