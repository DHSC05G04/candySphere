'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable(
    'status',{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      descricao: {
        type: Sequelize.STRING,
        unique:true,
        allowNull: false,
      }
    }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('status');
  }
};
