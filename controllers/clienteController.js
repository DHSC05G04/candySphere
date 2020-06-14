const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const moment = require('moment');
const { post } = require('../routes/clientesRoute');
//const API_BASE = 'http://candyspheredev.herokuapp.com/api/v0';
const API_BASE = 'http://localhost:3000/api/v0';

const clienteController = {
    index: async (req, res, next) => {
        let tabActive = {
            homeAct: "inactive",
            adminAct: "inactive",
            financeiroAct: "inactive",
            clientesAct: "active",
            funcionariosAct: "inactive",
            pdvAct: "inactive",

        };
      
        const clientes = await fetch(`${API_BASE}/clientes`)
        const dataCliente = await clientes.json();
        res.render('clientes/listar', {
            title: 'Express',
            tabs: tabActive,
            clientes: dataCliente,
            usuario: req.session.user,
            clienteUnico: ""
        });
    },
    store: async (req, res) => {

        const post = {nome,cpf,email,telefone,cep,endereco,numero,complemento,bairro,cidade,uf} = req.body
        
        try {
            const clienteApi = await fetch(`${API_BASE}/clientes`, {
                method: "post",
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const clienteDados = clienteApi.json()
            res.redirect('/clientes')
        } catch (error) {
            res.status(400).json(error)
        }
      
    },
    show: async (req, res) => {
        let tabActive = {
            homeAct: "inactive",
            adminAct: "inactive",
            financeiroAct: "inactive",
            clientesAct: "active",
            funcionariosAct: "inactive",
            pdvAct: "inactive",
        };

        const {
            id
        } = req.params
        const clientes = await fetch(`${API_BASE}/clientes`)
        const dataCliente = await clientes.json();
        const cliente = await fetch(`${API_BASE}/clientes/${id}`)
        const clienteUnico = await cliente.json();
        console.log(clienteUnico)
        res.render('clientes/listar', {
            title: 'Express',
            tabs: tabActive,
            clientes: dataCliente,
            usuario: req.session.user,
            clienteUnico,
            
        });
    },
    view: async (req, res) => {
        let tabActive = {
            homeAct: "inactive",
            adminAct: "inactive",
            financeiroAct: "inactive",
            clientesAct: "active",
            funcionariosAct: "inactive",
            pdvAct: "inactive",
        };

        const {
            id
        } = req.params
        
        const cliente = await fetch(`${API_BASE}/clientes/${id}`)
        const clienteUnico = await cliente.json();
        console.log(clienteUnico)
        res.render('clientes/clienteView', {
            title: 'Express',
            tabs: tabActive,
            usuario: req.session.user,
            clienteUnico,
            moment
        });
    },
    update: async (req,res)=>{
        const post = {id,nome,cpf,email,telefone,cep,endereco,numero,complemento,bairro,cidade,uf} = req.body
      
        try {
            const clienteApi = await fetch(`${API_BASE}/clientes`, {
                method: "put",
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
           
            res.redirect('/clientes')
        } catch (error) {
            res.status(400).json(error)
        }
    },
    delete: async (req,res)=>{
       
     
        try {
            const func = await fetch(`${API_BASE}/clientes`, {
                method: "delete",
                body: JSON.stringify(req.params),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const f = func.json();
           
            res.redirect("/clientes")

        } catch (erro) {
            res.status(400).json(erro)
        }
    }
   
}

module.exports = clienteController;