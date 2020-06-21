const fetch = require('node-fetch');
require('dotenv').config();

const API_BASE = process.env.API_BASE;

const receitasController = {
    index: async (req, res) => {
        let tabActive = {homeAct: "inactive",
                        operacaoAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};

        try {
            const receitasAPI = await fetch(`${API_BASE}/receitas`);
            const receitas = await receitasAPI.json();
    
            return res.render('admin/receitas', {
                title: 'Express',
                tabs: tabActive,
                receitas,
                API_BASE,
                usuario: req.session.user,
                user: req.user
            });
            
        } catch (error) {
            return res.send(error);            
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
            const receitasAPI = await fetch(`${API_BASE}/receitas/${id}`);
            const [receita] = await receitasAPI.json();
    
            return res.render('admin/receitasView', {
                title: 'Express',
                tabs: tabActive,
                receita,
                API_BASE,
                usuario:req.session.user,
                user: req.user
            });
            
        } catch (error) {
            return res.send(error);            
        };


    },

    create: async (req, res) => {
        let tabActive = {homeAct: "inactive",
                        operacaoAct: "active",
                        financeiroAct: "inactive",
                        clientesAct: "inactive",
                        funcionariosAct: "inactive",
                        pdvAct: "inactive"};
    
            return res.render('admin/criarReceita', {
                title: 'Express',
                tabs: tabActive,
                API_BASE,
                usuario:req.session.user,
                user: req.user
            });
    },

    store: async (req, res) => {
        const [foto] = req.files
        const dadosRaw = req.body
        if(foto != undefined) {
            dadosRaw.foto = `/images/receitas/${foto.filename}`
        }
        
        const dadosReceita = {
            nome: dadosRaw.nome,
            descricao: dadosRaw.descricao,
            tempo_preparo: dadosRaw.tempo_preparo,
            rendimento: dadosRaw.rendimento,
            foto: dadosRaw.foto
        }

        let instrucoes = []
        if(Array.isArray(dadosRaw.instrucao)) {
            dadosRaw.instrucao.forEach(element => {
                const instrucao = {
                    instrucao: element
                }
                instrucoes.push(instrucao)
            });
        } else {
            const instrucao = {
                instrucao: dadosRaw.instrucao
            }
            instrucoes.push(instrucao)
        }

        let ingredientes = []
        if(Array.isArray(dadosRaw.ingrediente)){
            dadosRaw.ingrediente.forEach((element, index) => {
                const cadIngrediente = {
                    quantidade: dadosRaw.quantidade[index],
                    unidade_id: dadosRaw.unidade[index],
                    estoque_id: element
                }

                ingredientes.push(cadIngrediente)
            })
        } else {
            const cadIngredientes = {
                quantidade: dadosRaw.quantidade,
                unidade_id: dadosRaw.unidade,
                estoque_id: dadosRaw.ingrediente
            }
        }

        const receitaAPI = await fetch(`${API_BASE}/receitas`, {
            method: 'post',
            body: JSON.stringify(dadosReceita),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const receita = await receitaAPI.json()
        const receitaId = receita.id

        instrucoes.forEach(async instrucao => {
            instrucao.receita_id = receitaId
            await fetch(`${API_BASE}/instrucoes`, {
                method: 'post',
                body: JSON.stringify(instrucao),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })

        ingredientes.forEach(async ingrediente => {
            ingrediente.receita_id = receitaId
            await fetch(`${API_BASE}/ingredientes`, {
                method: 'post',
                body: JSON.stringify(ingrediente),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })

        return res.redirect('/admin/receitas')
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
