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
        
        if(Array.isArray(produtosRaw['id[]'])) {
            produtosRaw['id[]'].forEach((item, index) => {
                const produto = {
                    id: item,
                    nome: produtosRaw['nome[]'][index],
                    qtd: produtosRaw['qtd[]'][index],
                    valor: produtosRaw['valor[]'][index]
                }

                produtos.push(produto)
            })
        } else {
            const produto = {
                id: produtosRaw['id[]'],
                nome: produtosRaw['nome[]'],
                qtd: produtosRaw['qtd[]'],
                valor: produtosRaw['valor[]']
            }

            produtos.push(produto)            
        }
        
        try {

            return res.render('admin/vendasFechar', { title: 'Express', tabs: tabActive, produtos, API_BASE, usuario:req.session.user});
        } catch (error) {
            return res.send(error)
        }
    },

    store: async (req, res) => {
        const dadosRaw = req.body

        try {
            const dadosCaixa = {
                hora_abertura: new Date(),
                hora_fechamento: new Date(),
                terminal_id: 1,
                usuario_id: req.session.user.id
            }

            const caixaAPI = await fetch(`${API_BASE}/caixas`, {
                method: 'POST',
                body: JSON.stringify(dadosCaixa),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const caixa = await caixaAPI.json()

            const dadosPedido = {
                entrada: new Date(),
                entrega: dadosRaw.entrega,
                total: Number(dadosRaw.valor).toFixed(2),
                sinal: (Number(dadosRaw.valor) * .5).toFixed(2),
                observacao: dadosRaw.observacao,
                status_id: 2,
                caixa_id: caixa.id,
                cliente_id: dadosRaw.cliente_id
            }

            console.log('*'.repeat(60))
            console.log(dadosPedido)

            const pedidoAPI = await fetch(`${API_BASE}/pedidos`, {
                method: 'POST',
                body: JSON.stringify(dadosPedido),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const pedido = await pedidoAPI.json()

            console.log('*'.repeat(60))
            console.log(pedido)

            const dadosRecebimentoSinal = {
                valor: Number(dadosPedido.sinal).toFixed(2),
                aprovado: 1,
                pedido_id: pedido.id,
                caixa_id: caixa.id,
                forma_pagamento_id: dadosRaw.forma_pagamento_id
            }

            const dadosRecebimentoTotal = {
                valor: Number((dadosPedido.total - dadosPedido.sinal)).toFixed(2),
                aprovado: 1,
                pedido_id: pedido.id,
                caixa_id: caixa.id,
                forma_pagamento_id: dadosRaw.forma_pagamento_id
            }
            
            await fetch(`${API_BASE}/recebimentos`, {
                method: 'POST',
                body: JSON.stringify(dadosRecebimentoSinal),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            await fetch(`${API_BASE}/recebimentos`, {
                method: 'POST',
                body: JSON.stringify(dadosRecebimentoTotal),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const dadosComanda = []

            if(Array.isArray(dadosRaw['produto_id[]'])) {
                dadosRaw['produto_id[]'].forEach((produto, index) => {
                    const comanda = {
                        pedido_id: pedido.id,
                        produto_id: dadosRaw['produto_id[]'][index],
                        quantidade: dadosRaw['quantidade[]'][index]
                    }

                    dadosComanda.push(comanda)
                })
            } else {
                const comanda = {
                    pedido_id: pedido.id,
                    produto_id: dadosRaw['produto_id[]'],
                    quantidade: dadosRaw['quantidade[]']
                }

                dadosComanda.push(comanda)
            }

            dadosComanda.forEach(async produto => {
                await fetch(`${API_BASE}/comandas`, {
                    method: 'POST',
                    body: JSON.stringify(produto),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            })

            return res.redirect('/admin/vendas')
        } catch(error) {
            return res.status(400).json(error.message)
        }
    }
}

module.exports = vendasController;
