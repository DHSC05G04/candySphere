'use strict';
module.exports = (sequelize, DataTypes) => {
    const Terminal = sequelize.define('Terminal', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        descricao: DataTypes.STRING,
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
        tableName: 'terminais',
        timestamps: true
    });
    Terminal.associate = (models) => {
        // Relacao 1:1 com tbl Caixa. Um Caixa precisa ser funcionario
        Terminal.hasMany(models.Caixa,{
            foreignKey:"terminal_id",
            as:"Caixa"
        })
    }
    return Terminal;
};


