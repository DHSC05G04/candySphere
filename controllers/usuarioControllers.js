const {
    Usuario
} = require('../models')
const config = require("../configs/database");
const bcrypt = require("bcrypt");
const Email = require('../configs/email');
const fetch = require('node-fetch');
const API_BASE = 'http://localhost:3000/api/v0'
require('dotenv').config();


const usuarioControllers = {
    index: (req, res) => {
        res.send("Deu Certo")
    },
    store: async (req, res) => {
        const {
            id,
            nome,
            nivel,
            senha
        } = req.body
        const hashSenha = bcrypt.hashSync(senha, 10);

        const post = {
            nome_usuario: nome,
            senha: hashSenha,
            acesso: nivel,
            funcionario_id: id
        }
     
        let enviarEmail = {
            from:`${process.env.EMAIL_USER}`,
            to:`${nome}`,
            subject: 'Cadastro de Usuário - Candy Sphere',
            html: `<ul>
                          <h1>Sistema Candy Sphere</h1>
                          <h3>Parabéns! você agora é um usuário do sistema</h3>
                          <p>Esse email permitirá ter o seu primeiro acesso ao sistema, onde deverá escolher um usuário e uma senha segura de acesso de acordo com os termos de segurança bem como a (LGPD -Lei Geral de Proteção de Dados‎ )</p>
                          <h2><b>Usuário: </b>${nome}</h2>
                          <h2><b>Senha: </b>${hashSenha}</h2>
                          <h2><b>Acesso: </b>${nivel==1?"ADM":"USER"}</h2>
                          <h2><b>acesse o link: </b>http://localhost:3000/</h2>
                  </ul>`
        }
        Email.sendMail(enviarEmail,(erro)=>{
            if(erro){
                console.log('Não foi possivel mandar o email: ' + erro );
            }
        });
    
        try {
            const criarUsuario = await fetch(`${API_BASE}/usuarios`, {
                method: "post",
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const usu = criarUsuario.json();
            res.redirect("/funcionarios")

        } catch (erro) {
            res.status(400).json(erro)
        }      



    },
}


module.exports = usuarioControllers