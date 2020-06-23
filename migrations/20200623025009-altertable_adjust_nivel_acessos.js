'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let transaction = await queryInterface.sequelize.transaction();
    try{
      await queryInterface.addColumn('usuarios',
      'nivel_acesso_id',{
        type:Sequelize.INTEGER.UNSIGNED,
        defaultValue: 1,
        references:{
          model:'nivel_acessos',
          key: 'id'
        },
        after: 'acesso',
        allowNull:false,
      },
        { transaction },
      );

      // Finaliza a Transaction
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
    try{
      await queryInterface.removeColumn('usuarios',
    'nivel_acesso_id',
    { transaction }
    );
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
