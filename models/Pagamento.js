'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pagamento = sequelize.define('Pagamento', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    data_pgto: {
      type: DataTypes.DATE,
      allowNull: false
    },
    valor: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    observacao: DataTypes.STRING,
    status_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    conta_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    formas_pagamento_id: {
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
    tableName: 'pagamentos',
    timestamps:true

  });
  Pagamento.associate = function(models) {
 
    Pagamento.belongsTo(
      models.Status,{
        foreignKey:'status_id',
        as: 'status'
      })
    Pagamento.belongsTo(
      models.Conta,{
        foreignKey:'conta_id',
        as: 'conta'
      })
    Pagamento.belongsTo(
      models.FormasDePagamento,{
        foreignKey:'formas_pagamento_id',
        as: 'FormasDePagamento'
      })
      Pagamento.hasMany(
        models.ContaMovimento, {
          foreignKey: 'pagamento_id',
          as: 'pagamento'
        })
  };
  return Pagamento;
};
