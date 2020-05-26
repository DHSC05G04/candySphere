'use strict';
module.exports = (sequelize, DataTypes) => {
  const Funcionario = sequelize.define('Funcionario', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    endereco: DataTypes.STRING,
    telefone: DataTypes.STRING,
    salario: {
      type: DataTypes.DECIMAL,
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
  }, {});

  Funcionario.associate = function(models) {
    // Relacao 1:1 com tbl Usuario. Um usuario precisa ser funcionario
    Funcionario.belongsTo(models.Usuario,{
        foreignKey: 'funcionario_id',
        as: 'usuario'
      }
    )
  
  };

  return Funcionario;
};