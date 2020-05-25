'use strict';
module.exports = (sequelize, DataTypes) => {
  const ingrediente = sequelize.define('ingrediente', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    estoque_id: DataTypes.INTEGER.UNSIGNED,
    quantidade: DataTypes.DECIMAL,
    unidade_id: DataTypes.INTEGER.UNSIGNED,
    receita_id: DataTypes.INTEGER.UNSIGNED,
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
  }, {});
  ingrediente.associate = function(models) {
    // associations can be defined here
  };
  return ingrediente;
};