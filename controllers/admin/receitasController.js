const fetch = require('node-fetch');

const API_BASE = 'http://localhost:3000/api/v0';

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
    
            return res.render('admin/receitas', { title: 'Express', tabs: tabActive, receitas,usuario:req.session.user });
            
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
    
            return res.render('admin/receitasView', { title: 'Express', tabs: tabActive, receita, usuario:req.session.user });
            
        } catch (error) {
            return res.send(error);            
        };


    },

    store: (req, res) => {

    },

    update: async (req, res) => {
        const foto = req.files
        let dados = req.body
        if(foto != undefined) {
            dados.foto = foto.filename
        }
        const {id} = req.params

        console.log(dados)
        console.log(dados.instrucoes)
        console.log(dados.ingredientes)
        console.log(dados.ingredientes[0])

        const teste = JSON.stringify(dados)
        console.log(JSON.parse(teste))

        try {
            const result = await fetch(`${API_BASE}/receitas/${id}`, {
                method: 'put',
                body: JSON.stringify(dados),
                headers: {
                    'Content-Type': 'application/json' 
                }
            })

            return res.redirect(`/admin/receitas/${id}`);
            
        } catch (error) {
            return res.status(400).json(error)
            
        }
        

    }
}

module.exports = receitasController;
