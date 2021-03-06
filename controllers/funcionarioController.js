const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const moment = require('moment');
require('dotenv').config();

const API_BASE = process.env.API_BASE;
const funcionarioController = {
    listarFuncionario: async (req, res, next) => {
        let tabActive = {
            homeAct: "inactive",
            operacaoAct: "inactive",
            financeiroAct: "inactive",
            clientesAct: "inactive",
            funcionariosAct: "active",
            pdvAct: "inactive"
        };

        try {
            const Funcionarios = await fetch(`${API_BASE}/funcionarios`)
            const FuncObj = await Funcionarios.json();

            let dataFuncionario = []

            const UsuariosAPI = await fetch(`${API_BASE}/usuarios`)
            const UsuariosData = await UsuariosAPI.json()

            for (i = 0; i < FuncObj.length; i++) {
                let funcComp = {
                    id: FuncObj[i].id,
                    nome: FuncObj[i].nome,
                    email: FuncObj[i].email,
                    telefone: FuncObj[i].telefone,
                    acesso: ""
                }

                for (j = 0; j < UsuariosData.length; j++) {
                    if (FuncObj[i].id === UsuariosData[j].funcionario_id) {
                        funcComp.acesso = UsuariosData[j].nivel_acesso.descricao
                    }
                }
                dataFuncionario.push(funcComp)
            }

            //    return  res.json(dataFuncionario)

            return res.render('funcionarios', {
                title: 'Express',
                tabs: tabActive,
                funcionarios: dataFuncionario,
                funcionarioUnico:"",
                usuario: req.session.user,
                user: req.user,
                API_BASE,
                msg:""
            });


        } catch (error) {
            return res.send(error)
        }

    },
    verFuncionario: async (req, res, next) => {
        let tabActive = {
            homeAct: "inactive",
            operacaoAct: "inactive",
            financeiroAct: "inactive",
            clientesAct: "inactive",
            funcionariosAct: "active",
            pdvAct: "inactive"
        };
        try {

            const {id} = req.params;
            const funcionarioAPI = await fetch(`${API_BASE}/funcionarios/${id}`);
            const funcionario = await funcionarioAPI.json();
            const usuarioAPI = await fetch(`${API_BASE}/usuarios/byFuncId/${id}`);
            const usuarios = await usuarioAPI.json();

            // const usuarioCadastrado = []
            // usuarios.forEach(usu => {
            //     if (funcionario[0].id === usu.funcionario_id) {
            //         usuarioCadastrado.push(usu)
            //     }


            // })
            const usuarioCadastrado = usuarios
            console.log('Retorno: ',usuarioCadastrado == null)
            if (usuarioCadastrado == null) {
                console.log("não tem cadastro")
            } else {
                console.log(usuarioCadastrado)
            }

            res.render('funcionario/funcionarioView', {
                title: 'Express',
                tabs: tabActive,
                funcionarios: funcionario,
                usuario: req.session.user,
                user: req.user,
                usuarioCadastrado,
                API_BASE,
                moment,
                fetch
            });
        } catch (error) {
            return res.send(error)
        }

    },
    store: async (req, res) => {
        const [avatar] = req.files
        const foto = (arq) => {
            if (arq == undefined) {
                return "avatar.png"
            } else {
                return arq.filename
            }
        }
        let photo = foto(avatar)
        const {
            nome,
            email,
            telefone,
            endereco,
            salario
        } = req.body
        const post = {
            nome,
            email,
            avatar: photo,
            telefone,
            endereco,
            salario

        }
        try {
            const func = await fetch(`${API_BASE}/funcionarios`, {
                method: "post",
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const f = func.json();
            res.redirect("/funcionarios")

        } catch (erro) {
            res.status(400).json(erro)
        }
    },
    modal: async (req,res) =>{
        let tabActive = {
            homeAct: "inactive",
            operacaoAct: "inactive",
            financeiroAct: "inactive",
            clientesAct: "inactive",
            funcionariosAct: "active",
            pdvAct: "inactive"
        };
        const {id} = req.params 
       
        try {
            const Funcionarios = await fetch(`${API_BASE}/funcionarios`)
            const FuncObj = await Funcionarios.json();
            const funcionarioAPI = await fetch(`${API_BASE}/funcionarios/${id}`);
            const funcionarioUnico = await funcionarioAPI.json();
            let dataFuncionario = []
            const UsuariosAPI = await fetch(`${API_BASE}/usuarios`)
            const UsuariosData = await UsuariosAPI.json()
            for (i = 0; i < FuncObj.length; i++) {
                let funcComp = {
                    id: FuncObj[i].id,
                    nome: FuncObj[i].nome,
                    email: FuncObj[i].email,
                    telefone: FuncObj[i].telefone,
                    acesso: ""
                }
                for (j = 0; j < UsuariosData.length; j++) {
                    if (FuncObj[i].id === UsuariosData[j].funcionario_id) {
                        funcComp.acesso = UsuariosData[j].nivel_acesso.descricao
                    }
                }
                dataFuncionario.push(funcComp)
            }
            return res.render('funcionarios', {
                title: 'Express',
                tabs: tabActive,
                funcionarios: dataFuncionario,
                funcionarioUnico,
                usuario: req.session.user,
                user: req.user,
                API_BASE
            });

        } catch (error) {
            return res.send(error)
        }
    },
    update:async (req,res) =>{
        const [avatar] = req.files
        const foto = (arq) => {
            if (arq == undefined) {
                return "avatar.png"
            } else {
                return arq.filename
            }
        }
        let photo = foto(avatar)
        const {
            id,
            nome,
            email,
            telefone,
            endereco,
            salario
        } = req.body
        const post = {
            id,
            nome,
            email,
            avatar: photo,
            telefone,
            endereco,
            salario

        }
        try {
            const func = await fetch(`${API_BASE}/funcionarios`, {
                method: "put",
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const f = func.json();
           
            res.redirect("/funcionarios")

        } catch (erro) {
            res.status(400).json(erro)
        }
    },
    delete: async(req,res)=>{

        try {
            const func = await fetch(`${API_BASE}/funcionarios`, {
                method: "delete",
                body: JSON.stringify(req.params),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const f = func.json();
           
            res.redirect("/funcionarios")

        } catch (erro) {
            res.status(400).json(erro)
        }
    }
}

module.exports = funcionarioController;
