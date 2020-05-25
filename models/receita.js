'use strict';
module.exports = (sequelize, DataTypes) => {
  const receita = sequelize.define('receita', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: DataTypes.STRING,
    tempo_preparo: DataTypes.INTEGER,
    rendimento: DataTypes.INTEGER,
    foto: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});
  receita.associate = function(models) {
    // associations can be defined here
  };
  return receita;
};