'use strict';
module.exports = (sequelize, DataTypes) => {
  const produto = sequelize.define('produto', {
    id: DataTypes.INTEGER,
    estoque_id: DataTypes.INTEGER,
    receita_id: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL,
    data_criacao: DataTypes.DATE,
    data_modificacao: DataTypes.DATE
  }, {});
  produto.associate = function(models) {
    // associations can be defined here
  };
  return produto;
};