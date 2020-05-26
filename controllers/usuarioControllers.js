const Sequelize = require("sequelize");
const config = require("../configs/database");
const bcrypt = require("bcrypt");


const usuarioControllers = {
    create: async(req,res)=>{
        
    },
    store: async(req,res)=>{
        
        res.send("deu certo")
    },
}






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