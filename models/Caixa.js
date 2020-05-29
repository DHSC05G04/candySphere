'use strict';
module.exports = (sequelize, DataTypes) => {
    const Caixa = sequelize.define('Caixa', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        hora_abertura: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        hora_fechamento: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        terminal_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        usuario_id: {
            type: DataTypes.INTEGER,
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
        tableName: 'caixas',
        timestamps: true

    });
    Caixa.associate = (models) => {
        // Relacao 1:1 com tbl Caixa. Um Caixa precisa ser funcionario
        Caixa.belongsTo(models.Usuario,{
            foreignKey:"usuario_id",
            as:"usuario"
        }),
   
        // Relacao 1:1 com tbl Caixa. Um Caixa precisa ser Terminal
        Caixa.belongsTo(models.Terminal,{
            foreignKey:"terminal_id",
            as:"terminal"
        })

    }
    return Caixa;
};