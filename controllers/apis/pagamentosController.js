const {
    Pagamento,
    Status,
    Conta,
    FormasDePagamento,
    Usuario
} = require('../../models')

const pagamentosController = {

    index: async (req, res) => {
        try {
            const pagamento = await Pagamento.findAll({
                include: [{
                        model: Status,
                        as: "status",
                                            },
                    {
                        model: Conta,
                        as: "conta",
                        
                        attributes: ['valor', 'aprovado', 'descricao'],
                        include: [{
                            model: Usuario,
                            as: "usuario",
                            
                            attributes: ['nome_usuario', 'acesso'],
                        }]
                    },
                    {
                        model: FormasDePagamento,
                        as: "FormasDePagamento",
                        
                        attributes: ['descricao', 'taxa', 'ativo']
                    }
                ]
            });
            return res.status(200).json(pagamento)
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    store: async (req, res) => {
        try {
            const {
                data_pgto,
                valor,
                observacao,
                status_id,
                conta_id,
                formas_pagamento_id
            } = req.body
            const pagamento = await Pagamento.create({
                data_pgto,
                valor,
                observacao,
                status_id,
                conta_id,
                formas_pagamento_id
            })
            return res.status(201).json(pagamento)

        } catch (error) {
            return res.status(400).json(error)
        }
    }, 
    update: async (req, res) => {
        try {
            const {
                id,
                data_pgto,
                valor,
                observacao,
                status_id,
                conta_id,
                formas_pagamento_id
            } = req.body
            const pagamento = await Pagamento.update({
                data_pgto,
                valor,
                observacao,
                status_id,
                conta_id,
                formas_pagamento_id
            },{
                where:{id}
            })
            return res.status(200).json(pagamento)

        } catch (error) {
            return res.status(400).json(error)
        }
    }, 
    delete: async (req, res) => {
        try {
            const {id} = req.body
            const pagamento = await Pagamento.destroy({where:{id}})
            return res.status(200).json(pagamento)
        } catch (error) {
            return res.status(400).json(error)
        }
    }, 
  

}

module.exports = pagamentosController;