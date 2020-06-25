const {
    Usuario
} = require('../models')
const config = require("../configs/database");
const bcrypt = require("bcrypt");
const Email = require('../configs/email');
const fetch = require('node-fetch');
require('dotenv').config();

const API_BASE = process.env.API_BASE;

const usuarioControllers = {
    index: (req, res) => {
        res.send("Deu Certo")
    },
    store: async (req, res) => {
        console.log(req.body)
        const {
            id,
            nome,
            nivel_acesso_id,
            senha
        } = req.body
        const hashSenha = bcrypt.hashSync(senha, 10);
        const post = {
            nome_usuario: nome,
            senha: hashSenha,
            nivel_acesso_id,
            funcionario_id: id
        }
      

        try {
            // LLS ==> VER CHAMADA DE TOKEN DE RESET DE SENHA!!!
            // LLS ==> VER URL CALULADA
            // const u = await user.json()
            let enviarEmail = {
                from:`${process.env.EMAIL_USER}`,
                to:`${nome}`,
                subject: 'Cadastro de Usuário - Candy Sphere',
                html: `<ul>
                              <h1>Sistema Candy Sphere</h1>
                              <h3>Parabéns! você agora é um usuário do sistema</h3>
                              <p>Esse email permitirá ter o seu primeiro acesso ao sistema, onde deverá escolher uma senha segura de acesso de acordo com os termos de segurança bem como a (LGPD -Lei Geral de Proteção de Dados‎ )</p>
                              <h2><b>Usuário: </b>${nome}</h2>
                              <h2><b>acesse o link: </b>http://localhost:3000/</h2>
                      </ul>`
            }
            Email.sendMail(enviarEmail,(erro)=>{
                if(erro){
                    console.log('Não foi possivel mandar o email: ' + erro );
                }
            });
               const user = await fetch(`${API_BASE}/usuarios`, {
                method: "post",
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const usu = await user.json();
               res.redirect('/funcionarios')

        } catch (erro) {
            res.status(400).json(erro)
        }      
    },
    update: async (req,res)=>{

        const {id,nome,nivel_acesso_id,senha} = req.body
        const criptSenha =  bcrypt.hashSync(senha, 10)
        post = {
            id:id,
            // nome_usuario:nome,
            // senha:criptSenha, 
            nivel_acesso_id
       }
        try {
            const user = await fetch(`${API_BASE}/usuarios`, {
                method: "put",
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const usu = await user.json();
          
            res.redirect('/funcionarios/verFuncionario/'+usu.id)
        } catch (error) {
             res.status(400).json(erro)
        }
    },
    delete:async(req,res)=>{
       const {id} = req.body
       const post ={
           id
       }
       try {
        const user = await fetch(`${API_BASE}/usuarios`, {
            method: "delete",
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const usu = await user.json();
      
        res.redirect('/funcionarios')
    } catch (error) {
         res.status(400).json(erro)
    }
    }
}


module.exports = usuarioControllers