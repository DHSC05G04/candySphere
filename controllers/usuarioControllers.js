const {Usuario} = require('../models')
const config = require("../configs/database");
const bcrypt = require("bcrypt");


const usuarioControllers = {
    create: async(req,res)=>{
            },
    store: async(req,res)=>{
        const hashSenha = bcrypt.hashSync('123',10);
        const novoUsuario = await Usuario.create({
        nome_usuario : "asovitorio",
        senha:hashSenha,
        acesso: 1,
        funcionario_id:1
       });
       console.log(novoUsuario);
      
    },
}


module.exports = usuarioControllers



