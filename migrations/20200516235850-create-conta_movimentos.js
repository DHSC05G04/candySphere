'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('conta_movimentos', { 
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        data: Sequelize.DATETIME,
        saldo: Sequelize.DECIMAL,
        obervacao: Sequelize.STRING,
        
        recebimentos_id:{
          type:Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'recebimentos'
            },
            key:'id'
          }
        },
        pagamento_id:{
          type:Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'pagamentos'
            },
            key:'id'
          }
        },
        create_at: Sequelize.DATE,
        update_at: Sequelize.DATE,
      });
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('conta_movimentos');
  }
};
