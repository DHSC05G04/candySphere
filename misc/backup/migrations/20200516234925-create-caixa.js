'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('caixas', { 
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        hora_abertura: Sequelize.DATETIME,
        hora_fechamento: Sequelize.DATETIME,
        terminal_id:{
          type:Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'terminais'
            },
            key:'id'
          }
        },
        usuario_id:{
          type:Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'usuarios'
            },
            key:'id'
          }
        },
        create_at: Sequelize.DATETIME,
        update_at: Sequelize.DATETIME,

      });

  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('caixas');
    
  }
};
