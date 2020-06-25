'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn('usuarios',
        'status', {
          type: Sequelize.INTEGER.UNSIGNED,
          defaultValue: 1,
          after: 'funcionario_id'
        },
        { transaction },
      );
      await queryInterface.addColumn('usuarios',
        'change_next_login', {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          after: 'status'
        },
        { transaction },
      );
      await queryInterface.addColumn('usuarios',
        'last_login', {
          type: Sequelize.DATE,
          allowNull: true,
          after: 'change_next_login'
        },
        { transaction },
      );
      await queryInterface.addColumn('usuarios',
        'reset_token', {
          type: Sequelize.STRING(32),
          allowNull: true,
          after: 'last_login'
        },
        { transaction },
      );
      await queryInterface.addColumn('usuarios',
        'reset_token_expires', {
          type: Sequelize.DATE,
          allowNull: true,
          after: 'reset_token'
        },
        { transaction },
      );
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
      queryInterface.removeColumn('usuarios', 'last_login'),
      queryInterface.removeColumn('usuarios', 'status'),
      queryInterface.removeColumn('usuarios', 'change_next_login'),
      queryInterface.removeColumn('usuarios', 'reset_token'),
      queryInterface.removeColumn('usuarios', 'reset_token_expires')
      await transaction.commit();
      return Promise.resolve();
    } catch (err) {
      if (transaction){
        await transaction.rollback();
      }
      return Promise.reject(err);
    }
  }
};
