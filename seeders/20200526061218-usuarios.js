'use strict';
const bcrypt = require("bcrypt");

const hashSenha = bcrypt.hashSync('123',10);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'usuarios', [
        {
          nome_usuario: "asovitorio",
          senha: hashSenha,
          acesso: 1,
          funcionario_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome_usuario: "llsouza.br",
          senha: hashSenha,
          acesso: 1,
          funcionario_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome_usuario: "rastapf",
          senha: hashSenha,
          funcionario_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome_usuario: "admin",
          senha: bcrypt.hashSync('candySphere123',10),
          funcionario_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {}
    );

  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('usuarios', null, {});

  }
};
