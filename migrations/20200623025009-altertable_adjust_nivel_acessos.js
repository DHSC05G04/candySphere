'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let transaction = await queryInterface.sequelize.transaction();
    try{
      await queryInterface.bulkInsert('nivel_acessos', [{
        id: 1,
        is_admin: false,
        descricao: 'Sem Acesso'
      },
      {
        id:2,
        is_admin: true,
        descricao: 'Administrador'
      },
      {
        id:3,
        is_admin:false,
        descricao: 'PDV'
      },
      {
        id:4,
        is_admin:false,
        descricao: 'RH'
      },
      {
        id:5,
        is_admin:false,
        descricao: 'Financeiro'
      },
    ], {
      ignoreDuplicates: false,

    });
      await queryInterface.addColumn('usuarios',
      'nivel_acesso_id',{
        type:Sequelize.INTEGER.UNSIGNED,
        default: 1,
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
