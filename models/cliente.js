'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    id: DataTypes.INTEGER,
    cpf: DataTypes.STRING,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    endereco: DataTypes.STRING,
    telefone: DataTypes.STRING,
    data_criacao: DataTypes.DATE,
    data_modificacao: DataTypes.DATE
  }, {});
  Cliente.associate = function(models) {
    // associations can be defined here
  };
  return Cliente;
};