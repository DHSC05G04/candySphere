'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    cpf: DataTypes.STRING,
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: DataTypes.STRING,
    endereco: DataTypes.STRING,
    telefone: DataTypes.STRING,
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
  Cliente.associate = function(models) {
    // associations can be defined here
  };
  return Cliente;
};