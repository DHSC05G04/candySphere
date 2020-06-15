'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comanda = sequelize.define('Comanda', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    nota_fiscal: {
      type: DataTypes.STRING,
      allowNull: true
    },
     
    pedido_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    produto_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    quantidade: {
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
    },
  }, {
    paranoid: true,
    tableName: 'comandas',
    timestamps:true

  });
  Comanda.associate = function(models) {
    // Relacao 1:1 com tbl Usuario. Um usuario precisa ser funcionario
    Comanda.belongsTo(
      models.Pedido,{
        foreignKey:'pedido_id',
        as: 'pedido'
      })
    Comanda.belongsTo(
      models.Produto,{
        foreignKey:'produto_id',
        as: 'produto'
      })

     

  };
  return Comanda;
};
