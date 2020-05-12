'use strict';
module.exports = (sequelize, DataTypes) => {
  const ingrediente = sequelize.define('ingrediente', {
    id: DataTypes.INTEGER,
    estoque_id: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    unidade_id: DataTypes.INTEGER,
    receita_id: DataTypes.INTEGER,
    data_criacao: DataTypes.DATE,
    data_modificacao: DataTypes.DATE
  }, {});
  ingrediente.associate = function(models) {
    // associations can be defined here
  };
  return ingrediente;
};