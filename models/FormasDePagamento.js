'use strict';
module.exports = (sequelize, DataTypes) => {
  const FormasDePagamento = sequelize.define('FormasDePagamento', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    taxa: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false
    },
    ativo: DataTypes.BOOLEAN,
    
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
    },
  }, {
    paranoid: true,
    tableName: 'formas_pagamento',
    timestamps: true

  });
  FormasDePagamento.associate = function(models) {
   
    FormasDePagamento.hasMany(
      models.Pagamento,{
        foreignKey:'formas_pagamento_id',
        as: 'pagamento'
      }
    )
    // FormasDePagamento.hasMany(
    //   models.Recebimento,{
    //     foreignKey:'formas_pagamento_id',
    //     as: 'recebimento'
    //   }
    // )

  };
  return FormasDePagamento;
};
