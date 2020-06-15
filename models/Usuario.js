'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    nome_usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    acesso: {
      type: DataTypes.INTEGER,
      default: 0
    }, // changed
    funcionario_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    'status':{
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue:1
    },
    'change_next_login':{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    'last_login': {
      type: DataTypes.DATE,
      allow_nul: true,
    }, // added
    'reset_token': DataTypes.STRING(32),    // added
    'reset_token_expires': DataTypes.DATE,  // added
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
    tableName: 'usuarios'

  });
  Usuario.associate = function(models) {
    // Relacao 1:1 com tbl Usuario. Um usuario precisa ser funcionario
    Usuario.belongsTo(
      models.Funcionario,{
        foreignKey:'funcionario_id',
        as: 'funcionario'
      })

      // Usuario.hasMany(
      //   models.Caixa,{
      //     foreignKey: 'usuario_id',
      //     as: 'caixa'
      // })

      Usuario.belongsTo(
        models.NivelAcesso,{
        foreignKey: 'acesso',
        as: 'nivel_acesso'
      })

  };
  return Usuario;
};
