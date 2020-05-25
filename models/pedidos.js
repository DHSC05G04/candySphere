'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pedidos = sequelize.define('Pedidos', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
    
      dt_entrada: {
        type: DataTypes.DATE,
        allowNull: false,
        default: new Date(),
      },
      dt_entrega: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      vlr_total: {
        type: DataTypes.DECIMAL(11,2),
        default: 0.00,
      },
      vlr_sinal: {
        type: DataTypes.DECIMAL(11,2),
        default: 0.00,
      },
      status_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
      },
      observacao:{
        type: DataTypes.STRING(1024),
        allowNull: true,
      },
  }, {
    timestamps: false,
    tableName: "pedidos"
  });
  Pedidos.associate = function(models) {
    // associations can be defined here
    Pedidos.belongsTo(
      models.Status,{
        foreignKey:'id',
        as: 'status'
      }
    )
  };
  return Pedidos;
};