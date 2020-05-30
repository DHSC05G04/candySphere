'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    entrada: {
      type: DataTypes.DATE,
      allowNull: false
    },
    entrega: {
      type: DataTypes.DATE,
      allowNull: false
    },
    total: DataTypes.DECIMAL,
    sinal: DataTypes.DECIMAL,
    obervacao: DataTypes.STRING,
    status_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    caixa_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    cliente_id: {
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
    tableName: 'pedidos',
    timestamps:true

  });
  Pedido.associate = function(models) {
    // Relacao 1:1 com tbl Usuario. Um usuario precisa ser funcionario
    Pedido.belongsTo(
      models.Status,{
        foreignKey:'status_id',
        as: 'status'
      }),
    Pedido.belongsTo(
      models.Caixa,{
        foreignKey:'caixa_id',
        as: 'caixa'
      }),
      
      Pedido.belongsTo(
        models.Cliente,{
          foreignKey:'cliente_id',
          as: 'cliente'
        })

   

  };
  return Pedido;
};