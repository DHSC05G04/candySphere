'use strict';
module.exports = (sequelize, DataTypes) => {
  const ContaMovimento = sequelize.define('ContaMovimento', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false
    },
    saldo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    observacao: DataTypes.STRING,
    recebimentos_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    pagamento_id: {
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
  }, {
    paranoid: true,
    tableName: 'conta_movimentos',
    timestamps:true

  });
  ContaMovimento.associate = function(models) {
    // Relacao 1:1 com tbl Usuario. Um usuario precisa ser funcionario
    ContaMovimento.belongsTo(
      models.Recebimento,{
        foreignKey:'recebimentos_id',
        as: 'recebimento'
      })
    ContaMovimento.belongsTo(
      models.Pagamento,{
        foreignKey:'pagamento_id',
        as: 'pagamento'
      })

     

  };
  return ContaMovimento;
};
