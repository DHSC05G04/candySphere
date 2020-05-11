'use strict';
module.exports = (sequelize, DataTypes) => {
  const funcionario = sequelize.define('funcionario', {
    id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    endereco: DataTypes.STRING,
    telefone: DataTypes.STRING,
    salario: DataTypes.DECIMAL,
    data_criacao: DataTypes.DATE,
    data_modificacao: DataTypes.DATE
  }, {});
  funcionario.associate = function(models) {
    // associations can be defined here
  };
  return funcionario;
};