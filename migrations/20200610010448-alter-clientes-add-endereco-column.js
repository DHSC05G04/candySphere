'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn('clientes','numero',Sequelize.STRING, { transaction });
      await queryInterface.addColumn('clientes','complemento',Sequelize.STRING, { transaction });
      await queryInterface.addColumn('clientes','bairro',Sequelize.STRING, { transaction });
      await queryInterface.addColumn('clientes','cep',Sequelize.STRING, { transaction });
      await queryInterface.addColumn('clientes','cidade',Sequelize.STRING, { transaction });
      await queryInterface.addColumn('clientes','uf',Sequelize.STRING, { transaction });
      
      await transaction.commit();
      return Promise.resolve();
    } catch (err) {
      if (transaction) {
        await transaction.rollback();
      }
      return Promise.reject(err);
    }
  },
     
  down: async (queryInterface, Sequelize) => {
    let transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('clientes','numero', { transaction });
      await queryInterface.removeColumn('clientes','complemento', { transaction });
      await queryInterface.removeColumn('clientes','bairro', { transaction });
      await queryInterface.removeColumn('clientes','cep', { transaction });
      await queryInterface.removeColumn('clientes','cidade', { transaction });
      await queryInterface.removeColumn('clientes','uf', { transaction });
      
      await transaction.commit();
      return Promise.resolve();
    } catch (err) {
      if (transaction) {
        await transaction.rollback();
      }
      return Promise.reject(err);
    }
  }
};
