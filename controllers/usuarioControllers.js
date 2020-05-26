const {Usuario} = require('../models')
const config = require("../configs/database");
const bcrypt = require("bcrypt");


const usuarioControllers = {
    create: async(req,res)=>{
        
    },
    store: async(req,res)=>{
        const hashSenha = bcrypt.hashSync('123',10);
        const usuario = {
            nome_usuario: "asovitorio",
            senha:hashSenha,
            acesso: 1,
            funcionario_id:1
        }
       
      
    },
}


module.exports = usuarioControllers



// //  id: {
//     type: DataTypes.INTEGER.UNSIGNED,
//     primaryKey: true,
//     allowNull: false,
//     autoIncrement: true
//   },
//   nome_usuario: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   senha: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   acesso