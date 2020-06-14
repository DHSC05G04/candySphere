const fetch = require('node-fetch');
require('dotenv').config();

const API_BASE = process.env.API_BASE;

const vendasController = {
    index: async (req, res) => {
        let tabActive = {homeAct: "inactive",
                        adminAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};

        try {
            const produtosAPI = await fetch(`${API_BASE}/produtos`)
            const produtos = await produtosAPI.json()

            return res.render('admin/vendas', { title: 'Express', tabs: tabActive , produtos, API_BASE, usuario:req.session.user});
        } catch (error) {
            return res.send(error)
        }
    },
    indexConcluir: async (req, res) => {
        let tabActive = {homeAct: "inactive",
                        adminAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};

        const produtosRaw = req.body
        const produtos = []
        
        produtosRaw['id[]'].forEach((item, index) => {
            const produto = {
                id: item,
                nome: produtosRaw['nome[]'][index],
                qtd: produtosRaw['qtd[]'][index],
                valor: produtosRaw['valor[]'][index]
            }

            produtos.push(produto)
        })
        
        try {

            return res.render('admin/vendasFechar', { title: 'Express', tabs: tabActive, produtos, API_BASE, usuario:req.session.user});
        } catch (error) {
            return res.send(error)
        }
    }
}

module.exports = vendasController;
