'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingrediente = sequelize.define('ingrediente', {
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
  }, {
    timestamps: true,
    paranoid: true
  });

  Ingrediente.associate = function(models) {
    // Define relacionamento 1:m com estocáveis
    Ingrediente.belongsTo(models.Estocaveis, {
      foreignKey: 'estoque_id'
    })

    // Define relacionamento 1:m com unidades
    Ingrediente.belongsTo(models.Unidade, {
      foreignKey: 'unidade_id'
    })

    // Define relacionamento 1:m com receitas
    Ingrediente.belongsTo(models.Receita, {
      foreignKey: 'receita_id'
    })
  };
  return Ingrediente;
};