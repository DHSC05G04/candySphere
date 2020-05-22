'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable(
        'unidades', {
          id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
          },
          unidade: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          created_at: {
            type:Sequelize.DATE,
            default: new Date(),
          },
          updated_at: {
            type:Sequelize.DATE,
            default: new Date(),
          },
          // Paranoid Mode
          deleted_at: {
            type:Sequelize.DATE,
            allowNull: true
          },

          });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('unidades');

  }
};
