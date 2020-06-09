module.exports = (sequelize, DataTypes) => {
    const NivelAcesso = sequelize.define('nivel_acesso', {
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
      }
    }, {
        tableName: 'nivel_acesso'
    });

    NivelAcesso.associate = function(models) {
        // Relacao 1:1 com tbl Usuario. Um usuario precisa ser funcionario
        Usuario.hasOne(
          models.Usuario,{
            foreignKey:'acesso',
            as: 'usuario'
          })
      };
    }
return NivelAcesso;
