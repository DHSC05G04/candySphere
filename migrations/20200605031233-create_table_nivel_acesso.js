'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('nivel_acessos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      is_admin:{
        type:Sequelize.BOOLEAN,
        default: false,
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING(45),
      }
       });
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.dropTable('nivel_acessos');
  }
};
