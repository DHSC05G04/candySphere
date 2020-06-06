const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const moment = require('moment');
const API_BASE = 'http://localhost:3000/api/v0';
const funcionarioController = {
    listarFuncionario: async (req, res, next) => {
        let tabActive = {
            homeAct: "inactive",
            adminAct: "inactive",
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
                        funcComp.acesso = UsuariosData[j].acesso
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
                msg:""
            });


        } catch (error) {
            return res.send(error)
        }

    },
    verFuncionario: async (req, res, next) => {
        let tabActive = {
            homeAct: "inactive",
            adminAct: "inactive",
            financeiroAct: "inactive",
            clientesAct: "inactive",
            funcionariosAct: "active",
            pdvAct: "inactive"
        };
        try {

            const {
                id
            } = req.params
            const funcionarioAPI = await fetch(`${API_BASE}/funcionarios/${id}`);
            const funcionario = await funcionarioAPI.json();
            const usuarioAPI = await fetch(`${API_BASE}/usuarios`);
            const usuarios = await usuarioAPI.json();

            const usuarioCadastrado = []
            usuarios.forEach(usu => {
                if (funcionario[0].id === usu.funcionario_id) {
                    usuarioCadastrado.push(usu)
                }


            })

            if (usuarioCadastrado.length <= 0) {
                console.log("não tem cadastro")
            } else {
                console.log(usuarioCadastrado[0])
            }

            res.render('funcionario/funcionarioView', {
                title: 'Express',
                tabs: tabActive,
                funcionarios: funcionario,
                usuario: req.session.user,
                usuarioCadastrado,
                moment
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
            adminAct: "inactive",
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
                        funcComp.acesso = UsuariosData[j].acesso
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