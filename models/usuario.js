'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    id: DataTypes.INTEGER,
    nome_usuario: DataTypes.STRING,
    senha: DataTypes.STRING,
    acesso: DataTypes.INTEGER,
    funcionario_id: DataTypes.INTEGER,
    data_criacao: DataTypes.DATE,
    data_modificacao: DataTypes.DATE
  }, {});
  usuario.associate = function(models) {
    // associations can be defined here
  };
  return usuario;
};