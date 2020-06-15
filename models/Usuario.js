'use strict';

 const bcrypt = require("bcrypt");

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
      });

      // Usuario.hasMany(
      //   models.Caixa,{
      //     foreignKey: 'usuario_id',
      //     as: 'caixa'
      // })

      Usuario.belongsTo(
        models.NivelAcesso,{
        foreignKey: 'acesso',
        as: 'nivel_acesso'
      });

  };
  // Criado um metodo em nosso modelo de usuario que validara as senhas evitando
  // transporta-la dentro do codigo. 
  // Este metodo ira checar um valor bruto (unhashed) recebido de algum formulario
  // e compara com a senha hasheada do banco, retornando TRUE / FALSE
  Usuario.prototype.validPassword = function(senha) {
    return bcrypt.compareSync(senha, this.senha);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password

  // Usuario.hook("beforeCreate", function(user) {
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  // });

  // Usuario.hook("beforeUpdate", function(user) {
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  // });

  // This is a fix by Samaila Philemon Bala in case you want to use ES6
  // and the above is not working

  // Usuario.beforeCreate(user => {
  //   user.senha = bcrypt.hashSync(
  //     user.senha,
  //      bcrypt.genSaltSync(10),
  //      null
  //    );
  //  });

  //  Usuario.beforeUpdate(user => {
  //    console.log('LLS - ',senha);
  //   user.senha = bcrypt.hashSync(
  //     user.senha,
  //      bcrypt.genSaltSync(10),
  //      null
  //    );
  //  });


  
  return Usuario;
};
