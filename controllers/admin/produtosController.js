const fetch = require('node-fetch');
require('dotenv').config();

const API_BASE = process.env.API_BASE;

const produtosController = {
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

            return res.render('admin/produtos', {
                title: 'Express',
                tabs: tabActive ,
                produtos,
                API_BASE,
                usuario: req.session.user,
                user: req.user
            });
        } catch (error) {
            return res.send(error)
        }
    }
}

module.exports = produtosController;
