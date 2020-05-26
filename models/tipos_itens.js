'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tipos_itens = sequelize.define('Tipos_itens',
   {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    tipos_itens_id: {
        type: DataTypes.INTEGER,
        alowNull: false,
    },
    unidades_id:{
        type: DataTypes.INTEGER,
        alowNull: false,
    }
  }, {
    timestamps: false,
    tableName: "tipos_itens"
  });

  Tipos_itens.associate = function(models) {
    // associations can be defined here
    // Tipos_itens.hasMany(
    //   models.Unidades,{
    //     foreignKey:'id',
    //     as: 'unidades'
    //   }
    // )
    
  };
  
  return Tipos_itens;

};