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
    paranoid: true,
    tableName: "tipos_itens"
  });

  TiposItens.associate = function(models) {
    //Definindo relação m:n entre unidades e tipo
    TiposItens.belongsToMany(
      models.Unidade,{
        through: 'unidades_por_tipos',
<<<<<<< HEAD
=======
        as: 'tipo',
>>>>>>> e1206d577bf91552cbb1209310959eadeac0257c
        foreignKey:'tipo_id',        
        otherKey: 'unidade_id'
      }
    );

    //Definindo relação 1:n entre tipos e estocaveis
<<<<<<< HEAD
    // TiposItens.hasOne(models.Estocaveis,{
    //   foreignKey: 'tipo_id'
    // })
=======
    TiposItens.hasOne(models.Estocaveis,{
      foreignKey: 'tipo_id'
    })
>>>>>>> e1206d577bf91552cbb1209310959eadeac0257c
    
  };
  
  return TiposItens;

};