'use strict';
module.exports = (sequelize, DataTypes) => {
  const TiposItens = sequelize.define('TiposItens',
   {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at',
        default: new Date()
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at',
        default: new Date()
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'deleted_at',
    }
  }, {
    timestamps: true,
    tableName: "tipos_itens"
  });

  TiposItens.associate = function(models) {
    // associations can be defined here
    // Tipos_itens.hasMany(
    //   models.Unidades,{
    //     foreignKey:'id',
    //     as: 'unidades'
    //   }
    // )
    
  };
  
  return TiposItens;

};