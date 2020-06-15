'use strict';
module.exports = (sequelize, DataTypes) => {
  const Receita = sequelize.define('Receita', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    descricao: DataTypes.STRING,
    tempo_preparo: DataTypes.INTEGER,
    rendimento: DataTypes.INTEGER,
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
    tableName: 'receitas'
  });

  Receita.associate = function(models) {
    // Define relação 1:m com ingredientes
    Receita.hasMany(models.Ingrediente, {
      foreignKey: 'receita_id',
      as: 'ingredientes'
    })

    // Define relação 1:m com instruções
    Receita.hasMany(models.InstrucoesPreparo, {
      foreignKey: 'receita_id',
      as: 'instrucoes'
    })

    Receita.hasOne(models.Estocaveis, {
      foreignKey: 'receita_id',
      as: 'fabricado'
    })
  };
  return Receita;
};
