'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('caixas', { 
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        hora_abertura: Sequelize.DATE,
        hora_fechamento: Sequelize.DATE,
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
        create_at: Sequelize.DATE,
        update_at: Sequelize.DATE,

      });

  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('caixas');
    
  }
};
