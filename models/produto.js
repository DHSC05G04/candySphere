'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    estoque_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    valor: DataTypes.DECIMAL(11,2),
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
    tableName: 'produtos'
  });
  Produto.associate = function(models) {
    // associations can be defined here
    Produto.belongsTo(models.Estocaveis, {
      foreignKey: 'estoque_id',
      as: 'itemEstoque'
    })
  };
  return Produto;
};
