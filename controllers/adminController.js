const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

const API_BASE = 'http://candyspheredev.herokuapp.com/api/v0';

const adminController = {
    index: (req, res, next) => {
        let tabActive = {homeAct: "inactive",
                        adminAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};
        res.render('admin/admin', { title: 'Express', tabs: tabActive,usuario:req.session.user });
    },
    indexProdutos: (req, res, next) => {
        let tabActive = {homeAct: "inactive",
                        adminAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};

        const produtos = JSON.parse(
                        fs.readFileSync(
                        path.join('database', 'produtos.json')));

        res.render('admin/produtos', { title: 'Express', tabs: tabActive , produtos,usuario:req.session.user});
    },
    indexEstoque: async (req, res, next) => {
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
    indexReceitas: async (req, res, next) => {
        let tabActive = {homeAct: "inactive",
                        adminAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};

        try {
            const receitasAPI = await fetch(`${API_BASE}/receitas`);
            const receitas = await receitasAPI.json();
    
            return res.render('admin/receitas', { title: 'Express', tabs: tabActive, receitas,usuario:req.session.user });
            
        } catch (error) {
            return res.send(error);            
        };


    }
};

module.exports = adminController;