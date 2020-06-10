'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return Promise.all([
      queryInterface.addColumn('clientes','numero',Sequelize.STRING),
      queryInterface.addColumn('clientes','complemento',Sequelize.STRING),
      queryInterface.addColumn('clientes','bairro',Sequelize.STRING),
      queryInterface.addColumn('clientes','cep',Sequelize.STRING),
      queryInterface.addColumn('clientes','cidade',Sequelize.STRING),
      queryInterface.addColumn('clientes','uf',Sequelize.STRING),
      ])
  },
     
  down: (queryInterface, Sequelize) => {
      return Promise.all([
      queryInterface.removeColumn('clientes','numero'),
      queryInterface.removeColumn('clientes','complemento'),
      queryInterface.removeColumn('clientes','bairro'),
      queryInterface.removeColumn('clientes','cep'),
      queryInterface.removeColumn('clientes','cidade'),
      queryInterface.removeColumn('clientes','uf'),
      ])
  }
};
