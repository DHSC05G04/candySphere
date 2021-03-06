'use strict';
module.exports = (sequelize, DataTypes) => {
  const InstrucoesPreparo = sequelize.define('InstrucoesPreparo', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    instrucao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    receita_id: {
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
    }
  }, {
    timestamps: true,
    paranoid: true,
    tableName: 'instrucoes_preparos'
  });
  InstrucoesPreparo.associate = function(models) {
    // associations can be defined here
    InstrucoesPreparo.belongsTo(models.Receita, {
      foreignKey: 'receita_id',
      as: 'origem'
    })
  };
  return InstrucoesPreparo;
};
