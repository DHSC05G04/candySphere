'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      nome_usuario: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      acesso: {
        type: Sequelize.INTEGER
      },
      funcionario_id: {
        type: Sequelize.INTEGER
      },
      data_criacao: {
        type: Sequelize.DATE
      },
      data_modificacao: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios');
  }
};