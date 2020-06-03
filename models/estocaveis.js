'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estocaveis = sequelize.define('Estocaveis', {
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
    custo_unitario: DataTypes.DECIMAL(11,2),
    validade: DataTypes.DATE,
    vendavel: DataTypes.BOOLEAN,
    foto: DataTypes.STRING,
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
    tableName: 'estocaveis'
  });
  Estocaveis.associate = function(models) {
    // Define relação 1:m com ingredientes
    // Estocaveis.hasMany(models.Ingrediente, {
    //   foreign_key: 'estoque_id',
    // });

    // Define relação 1:m com produtos
    // Estocaveis.hasMany(models.Produto, {
    //   foreignKey: 'estoque_id'
    // });

    // Define relação 1:1 com tipos
    Estocaveis.belongsTo(models.TiposItens,{
      foreignKey: 'tipo_id',
      as: 'classe'
    });

    // Define relação 1:1 com unidades
    Estocaveis.belongsTo(models.Unidade,{
      foreignKey: 'unidade_id',
      as: 'unMedida'
    });
  };
  return Estocaveis;
};
