'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return Promise.all([
     queryInterface.addColumn('usuarios',
     'last_login', {
       type: Sequelize.DATE,
       allow_nul: true,
      },
     ),
     queryInterface.addColumn('usuarios',
     'status', {
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active'
      },
     ),
     queryInterface.addColumn('usuarios',
     'change_password', {
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active'
      },
     ),
   ]);

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return Promise.all([
     queryInterface.removeColumn('usuarios', 'last_login'),
     queryInterface.removeColumn('usuarios', 'status'),
   ])
  }
};
