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
            const pedidosAPI = await fetch(`${API_BASE}/pedidos/${id}`);
            const [pedido] = await pedidosAPI.json();
    
            return res.render('admin/pedidosView', {
                title: 'Express',
                tabs: tabActive,
                pedido,
                API_BASE,
                usuario:req.session.user,
                user: req.user,
                moment
            });
            
        } catch (error) {
            return res.send(error);            
        };
    }
}

module.exports = pedidosController;
