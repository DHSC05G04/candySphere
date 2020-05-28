'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estocaveis = sequelize.define('estocaveis', {
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
    timestamps: true,
    paranoid: true,
    freezeTableName: true
  });
  Estocaveis.associate = function(models) {
    // Define relação 1:m com ingredientes
    Estocaveis.hasMany(models.Ingrediente, {
      foreign_key: 'estoque_id',
    });

    // Define relação 1:m com produtos
    Estocaveis.hasMany(models.Produto, {
      foreignKey: 'estoque_id'
    });

    // Define relação 1:1 com tipos
    Estocaveis.belongsTo(models.TiposItens,{
      foreignKey: 'tipo_id'
    });

    // Define relação 1:1 com unidades
    Estocaveis.belongsTo(models.Unidade,{
      foreignKey: 'unidade_id'
    });
  };
  return Estocaveis;
};