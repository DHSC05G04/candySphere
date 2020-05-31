'use strict';
module.exports = (sequelize, DataTypes) => {
  const Conta = sequelize.define('Conta', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    valor: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    aprovado: DataTypes.INTEGER,
    usuarios_id: {
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
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    paranoid: true,
    tableName: 'contas',
    timestamps: true

  });
  Conta.associate = function (models) {
    // Relacao 1:1 com tbl Usuario. Um usuario precisa ser funcionario
    Conta.belongsTo(
      models.Usuario, {
        foreignKey: 'usuarios_id',
        as: 'usuario'
      })
      Conta.hasMany(
        models.Pagamento,{
          foreignKey:'conta_id',
          as: 'conta'
        }
      )



  };
  return Conta;
};