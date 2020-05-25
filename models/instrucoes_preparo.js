'use strict';
module.exports = (sequelize, DataTypes) => {
  const instrucoes_preparo = sequelize.define('instrucoes_preparo', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    instrucao: DataTypes.STRING,
    receita_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
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
  instrucoes_preparo.associate = function(models) {
    // associations can be defined here
  };
  return instrucoes_preparo;
};