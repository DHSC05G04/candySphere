'use strict';

module.exports = (sequelize, DataTypes) => {
    const Unidade = sequelize.define('Unidade', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        unidade: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'created_at',
            default: new Date()
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'updated_at',
            default: new Date()
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'deleted_at',
        }
    },
    {
        timestamps: true,
        paranoid: true
    });

    Unidade.associate = function(models) {
        //Definindo relação m:n entre unidades e tipo
        Unidade.belongsToMany(
            models.TiposItens,{
              through: 'unidades_por_tipos',
              as: 'unidadeItem',
              foreignKey:'unidade_id',        
              otherKey: 'tipo_id'
            }
        );

        //Definindo relação 1:n entre unidades e ingredientes
        // Unidade.hasOne(models.Ingrediente, {
        //     foreignKey: 'unidade_id'
        // });

        
    };

    return Unidade;
}