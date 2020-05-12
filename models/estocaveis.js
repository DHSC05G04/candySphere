'use strict';
module.exports = (sequelize, DataTypes) => {
  const estocaveis = sequelize.define('estocaveis', {
    id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    tipo_id: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    unidade_id: DataTypes.INTEGER,
    custo_unitario: DataTypes.DECIMAL,
    validade: DataTypes.DATE,
    vendavel: DataTypes.BOOLEAN,
    data_criacao: DataTypes.DATE,
    data_modificacao: DataTypes.DATE
  }, {});
  estocaveis.associate = function(models) {
    // associations can be defined here
  };
  return estocaveis;
};