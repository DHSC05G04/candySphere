'use strict';
module.exports = (sequelize, DataTypes) => {
  const NivelAcesso = sequelize.define('NivelAcesso', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    is_admin:{
      type:DataTypes.BOOLEAN,
      default: false,
    },
    descricao: {
      type: DataTypes.STRING(45),
    },
  }, {
      tableName: 'nivel_acesso',
      timestamps:false
  });

  NivelAcesso.associate = function(models) {
      // Relacao 1:1 com tbl Usuario. Um usuario precisa ser funcionario
    NivelAcesso.hasMany(
      models.Usuario,{
        foreignKey:'id',
        as: 'usuario'
      })
  };
  return NivelAcesso;
};
