const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

const API_BASE = 'http://candyspheredev.herokuapp.com/api/v0';

const adminController = {
    index: (req, res) => {
        let tabActive = {homeAct: "inactive",
                        adminAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};
        res.render('admin/admin', { title: 'Express', tabs: tabActive,usuario:req.session.user });
    },
    indexProdutos: async (req, res) => {
        let tabActive = {homeAct: "inactive",
                        adminAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};

        try {
            const produtosAPI = await fetch(`${API_BASE}/produtos`)
            const produtos = await produtosAPI.json()

            return res.render('admin/produtos', { title: 'Express', tabs: tabActive , produtos,usuario:req.session.user});
        } catch (error) {
            return res.send(error)
        }
    },
    indexEstoque: async (req, res) => {
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
        
    }
};

module.exports = adminController;
