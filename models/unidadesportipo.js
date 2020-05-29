'use strict';
module.exports = (sequelize, DataTypes) => {
  const UnidadesPorTipo = sequelize.define('UnidadesPorTipo', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    tipo_id: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED
    },
    unidade_id: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED
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
  }, {
    timestamps: true,
    paranoid: true,
    tableName: 'unidades_por_tipos'
  });
  UnidadesPorTipo.associate = function(models) {
    // associations can be defined here
    UnidadesPorTipo.belongsTo(models.Unidade, {
      foreignKey: 'unidade_id'
    })

    UnidadesPorTipo.belongsTo(models.TiposItens, {
      foreignKey: 'tipo_id'
    })
  };
  return UnidadesPorTipo;
};