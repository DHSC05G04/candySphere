'use strict';
module.exports = (sequelize, DataTypes) => {
  const estocaveis = sequelize.define('estocaveis', {
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
    tipo_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    quantidade: DataTypes.INTEGER,
    unidade_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    custo_unitario: DataTypes.DECIMAL,
    validade: DataTypes.DATE,
    vendavel: DataTypes.BOOLEAN,
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'      
    }
  }, {
    freezeTableName: true
  });
  estocaveis.associate = function(models) {
    // associations can be defined here
  };
  return estocaveis;
};