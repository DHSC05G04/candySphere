const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const moment = require('moment');
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

        const clientes = await  fetch(`${API_BASE}/clientes`)
        const dataCliente= await clientes.json();
            res.render('clientes/listar', {
            title: 'Express',
            tabs: tabActive,
            clientes: dataCliente,
            usuario:req.session.user
        });
    },
    store: async (req,res)=>{
        
        try {
            const clienteApi = await fetch(`${API_BASE}/clientes`, {
                method: "post",
                body: JSON.stringify(req.body),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const clienteDados = clienteApi.json()
           
            res.redirect('/clientes')
            
        } catch (error) {
            res.status(400).json(error)
        }

        res.send(req.body);
    }

}

module.exports = clienteController;