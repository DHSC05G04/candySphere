'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingrediente = sequelize.define('Ingrediente', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    estoque_id: DataTypes.INTEGER.UNSIGNED,
    quantidade: DataTypes.DECIMAL,
    unidade_id: DataTypes.INTEGER.UNSIGNED,
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
  }, {
    timestamps: true,
    paranoid: true,
    tableName: 'ingredientes'
  });

  Ingrediente.associate = function(models) {
    // Define relacionamento 1:m com estocáveis
    Ingrediente.belongsTo(models.Estocaveis, {
      foreignKey: 'estoque_id',
      as: 'componente'
    })

    // Define relacionamento 1:m com unidades
    Ingrediente.belongsTo(models.Unidade, {
      foreignKey: 'unidade_id',
      as: 'unidade'
    })

    // Define relacionamento 1:m com receitas
    Ingrediente.belongsTo(models.Receita, {
      foreignKey: 'receita_id',
      as: 'origem'
    })
  };
  return Ingrediente;
};
