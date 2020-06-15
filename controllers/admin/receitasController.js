const fetch = require('node-fetch');
require('dotenv').config();

const API_BASE = process.env.API_BASE;

const receitasController = {
    index: async (req, res) => {
        let tabActive = {homeAct: "inactive",
                        adminAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};

        try {
            const receitasAPI = await fetch(`${API_BASE}/receitas`);
            const receitas = await receitasAPI.json();
    
            return res.render('admin/receitas', { title: 'Express', tabs: tabActive, receitas, API_BASE, usuario:req.session.user });
            
        } catch (error) {
            return res.send(error);            
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
            const receitasAPI = await fetch(`${API_BASE}/receitas/${id}`);
            const [receita] = await receitasAPI.json();
    
            return res.render('admin/receitasView', { title: 'Express', tabs: tabActive, receita, API_BASE, usuario:req.session.user });
            
        } catch (error) {
            return res.send(error);            
        };


    },

    create: async (req, res) => {
        let tabActive = {homeAct: "inactive",
                        adminAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};
    
            return res.render('admin/criarReceita', { title: 'Express', tabs: tabActive, API_BASE, usuario:req.session.user });
    },

    store: (req, res) => {
        const dadosRaw = req.body
        console.log(dadosRaw)
    },

    update: async (req, res) => {
        const [foto] = req.files
        let dados = req.body
        if(foto != undefined) {
            dados.foto = `/images/receitas/${foto.filename}`
        }
        const {id} = req.params

        try {
            await fetch(`${API_BASE}/receitas/${id}`, {
                method: 'put',
                body: JSON.stringify(dados),
                headers: {
                    'Content-Type': 'application/json' 
                }
            })
            return res.redirect(`/admin/receitas`);
            
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports = receitasController;
