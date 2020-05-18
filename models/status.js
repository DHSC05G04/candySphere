'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
    descricao: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: "status"
  });
  Status.associate = function(models) {
    // associations can be defined here
  };
  return Status;
};