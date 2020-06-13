const fetch = require('node-fetch');

const API_BASE = 'http://localhost:3000/api/v0';

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

            return res.render('admin/produtos', { title: 'Express', tabs: tabActive , produtos,usuario:req.session.user});
        } catch (error) {
            return res.send(error)
        }
    }
}

module.exports = produtosController;