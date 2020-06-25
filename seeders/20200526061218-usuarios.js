'use strict';
const bcrypt = require("bcrypt");

const hashSenha = bcrypt.hashSync('123',10);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'usuarios', [
        {
          id:1,
          nome_usuario: "asovitorio",
          senha: hashSenha,
          acesso: 1,
          nivel_acesso_id:2,
          funcionario_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id:2,
          nome_usuario: "llsouza.br",
          senha: hashSenha,
          acesso: 1,
          nivel_acesso_id:2,
          funcionario_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id:3,
          nome_usuario: "rastapf",
          senha: hashSenha,
          funcionario_id: 4,
          acesso:1,
          nivel_acesso_id:2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id:4,
          nome_usuario: "admin",
          senha: bcrypt.hashSync('candySphere123',10),
          funcionario_id: 1,
          nivel_acesso_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {
        ignoreDuplicates: true,
        updateOnDuplicate: false,
        logging:true
      }
    );

  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('usuarios', null, {});

  }
};
