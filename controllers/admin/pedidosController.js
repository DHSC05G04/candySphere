const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const moment = require('moment');
require('dotenv').config();

const API_BASE = process.env.API_BASE;

const pedidosController = {
    index: async (req, res) => {
        let tabActive = {homeAct: "inactive",
                        operacaoAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};

        try {

            const pedidosAPI = await fetch(`${API_BASE}/pedidos`);
            const pedidos = await pedidosAPI.json();

            return res.render('admin/pedidos', {
                title: 'Express',
                tabs: tabActive,
                API_BASE,
                pedidos,
                usuario:req.session.user,
                user:req.user,
                moment
            });
            
        } catch (error) {
            return res.send(error)            
        };
        
    },

    indexById: async (req, res) => {
        let tabActive = {homeAct: "inactive",
                        operacaoAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};

        const {id} = req.params;

        try {
            const estoqueAPI = await fetch(`${API_BASE}/estocaveis/${id}`);
            const [estoque] = await estoqueAPI.json();
    
            return res.render('admin/estoqueView', {
                title: 'Express',
                tabs: tabActive,
                estoque,
                API_BASE,
                usuario:req.session.user,
                user: req.user
            });
            
        } catch (error) {
            return res.send(error);            
        };
    },

    update: async (req, res) => {
        let tabActive = {homeAct: "inactive",
                        operacaoAct: "active",
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
    },
    create: async (req, res) => {
        let tabActive = {homeAct: "inactive",
                        operacaoAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};

            return res.render('admin/criarEstoque', {
                title: 'Express',
                tabs: tabActive,
                API_BASE,
                usuario: req.session.user,
                user: req.user
            });
    },
    store: async (req, res) => {
        const [foto] = req.files
        let dados = req.body
        
        if(foto != undefined) {
            dados.foto = `/images/produtos/${foto.filename}`
        }
        
        await fetch(`${API_BASE}/estocaveis`, {
            method: 'post',
            body: JSON.stringify(dados),
            headers: {
                'Content-Type': 'application/json' 
            }            
        })

        return res.redirect('/admin/estoque')
    }
}

module.exports = pedidosController;
