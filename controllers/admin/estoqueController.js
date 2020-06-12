const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

const API_BASE = 'http://localhost:3000/api/v0';

const estoqueController = {
    index: async (req, res) => {
        let tabActive = {homeAct: "inactive",
                        adminAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};

        try {

            const estoqueAPI = await fetch(`${API_BASE}/estocaveis`);
            const estoque = await estoqueAPI.json();

            return res.render('admin/estoque', { title: 'Express', tabs: tabActive, estoque,usuario:req.session.user });
            
        } catch (error) {
            return res.send(error)            
        };
        
    },

    indexById: async (req, res) => {
        let tabActive = {homeAct: "inactive",
                        adminAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};

        const {id} = req.params;

        try {
            const estoqueAPI = await fetch(`${API_BASE}/estocaveis/${id}`);
            const [estoque] = await estoqueAPI.json();
    
            return res.render('admin/estoqueView', { title: 'Express', tabs: tabActive, estoque, usuario:req.session.user });
            
        } catch (error) {
            return res.send(error);            
        };
    },

    update: async (req, res) => {
        let tabActive = {homeAct: "inactive",
                        adminAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};
        
        const [foto] = req.files
        let dados = req.body
        
        if(foto != undefined) {
            dados.foto = `/images/produtos/${foto.filename}`
        }
        const {id} = req.params

        try {
            const result = await fetch(`${API_BASE}/estocaveis/${id}`, {
                method: 'put',
                body: JSON.stringify(dados),
                headers: {
                    'Content-Type': 'application/json' 
                }
            })

            return res.redirect(`/admin/estoque`);
            
        } catch (error) {
            return res.status(400).json(error)
            
        }
    }
}

module.exports = estoqueController;