'use strict';
module.exports = (sequelize, DataTypes) => {
  const instrucoes_preparo = sequelize.define('instrucoes_preparo', {
    id: DataTypes.INTEGER,
    instrucao: DataTypes.STRING,
    receita_id: DataTypes.INTEGER,
    data_criacao: DataTypes.DATE,
    data_modificacao: DataTypes.DATE
  }, {});
  instrucoes_preparo.associate = function(models) {
    // associations can be defined here
  };
  return instrucoes_preparo;
};