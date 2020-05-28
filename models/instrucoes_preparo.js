'use strict';
module.exports = (sequelize, DataTypes) => {
  const InstrucoesPreparo = sequelize.define('instrucoes_preparo', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    instrucao: DataTypes.STRING,
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
    paranoid: true
  });
  InstrucoesPreparo.associate = function(models) {
    // associations can be defined here
<<<<<<< HEAD
    // InstrucoesPreparo.belongsTo(models.Receita, {
    //   foreignKey: 'receita_id'
    // })
=======
    InstrucoesPreparo.belongsTo(models.Receita, {
      foreignKey: 'receita_id'
    })
>>>>>>> e1206d577bf91552cbb1209310959eadeac0257c
  };
  return InstrucoesPreparo;
};