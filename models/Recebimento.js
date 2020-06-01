'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recebimento = sequelize.define('Recebimento', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    valor: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    aprovado: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    pedido_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    caixa_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    forma_pagamento_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
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
       
    },
  }, {
    paranoid: true,
    tableName: 'recebimentos',
    timestamps: true

  });
  Recebimento.associate = function (models) {
    // Relacao 1:1 com tbl Usuario. Um usuario precisa ser funcionario
    Recebimento.belongsTo(
      models.Pedido, {
        foreignKey: 'pedido_id',
        as: 'pedido'
      })
    Recebimento.belongsTo(
      models.Caixa, {
        foreignKey: 'caixa_id',
        as: 'caixa'
      })
    Recebimento.belongsTo(
      models.FormasDePagamento, {
        foreignKey: 'forma_pagamento_id',
        as: 'forma_pagamento'
      })
      Recebimento.hasMany(
        models.ContaMovimento, {
          foreignKey: 'recebimentos_id',
          as: 'recebimento'
        })
     

  };
  return Recebimento;
};
  

  