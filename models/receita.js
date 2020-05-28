'use strict';
module.exports = (sequelize, DataTypes) => {
  const Receita = sequelize.define('receita', {
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
    descricao: DataTypes.STRING,
    tempo_preparo: DataTypes.INTEGER,
    rendimento: DataTypes.INTEGER,
    foto: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
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

  Receita.associate = function(models) {
    // Define relação 1:m com ingredientes
    Receita.hasMany(models.Ingrediente, {
      foreignKey: 'receita_id'
    })

    // Define relação 1:m com instruções
    Receita.hasMany(models.InstrucoesPreparo, {
      foreignKey: 'receita_id'
    })

    // Define relação 1:m com produtos
    Receita.hasMany(models.Produto, {
      foreignKey: 'receita_id'
    })
  };
  return Receita;
};