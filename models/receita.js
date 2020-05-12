'use strict';
module.exports = (sequelize, DataTypes) => {
  const receita = sequelize.define('receita', {
    id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    tempo_preparo: DataTypes.INTEGER,
    rendimento: DataTypes.INTEGER,
    foto: DataTypes.STRING,
    data_criacao: DataTypes.DATE,
    data_modificacao: DataTypes.DATE
  }, {});
  receita.associate = function(models) {
    // associations can be defined here
  };
  return receita;
};