const {FormasDePagamento} = require("../../models");

const formasDePagamentosController = {

    index: async (req, res) => {
        if(Object.keys(req.params).length === 0) {
            try {
                const formasDePagamento = await FormasDePagamento.findAll();
                return res.status(200).json(formasDePagamento);
            } catch (error) {
                return res.status(400).json(error);
            }
        } else {
            try {
                const formasDePagamento = await FormasDePagamento.findAll({
                    where: {
                        id: req.params.id
                    }
                });
                return res.status(200).json(formasDePagamento);
            } catch (error) {
                return res.status(400).json(error);
            }
        }
       
      
    },

    store: async (req, res) => {

        try {
            const {descricao,taxa,ativo} =req.body
            const formasDePagamento = await FormasDePagamento.create({descricao:descricao,taxa:taxa,ativo:ativo});
            return res.status(201).json(formasDePagamento);
        } catch (error) {
            return res.status(400).json(error);
        }
       
    },

    update: async (req, res) => {
        try {
            const {id,descricao,taxa,ativo} =req.body
            const formasDePagamento = await FormasDePagamento.update({descricao:descricao,taxa:taxa,ativo:ativo},{
                where:{
                    id:id
                }
            });
            return res.status(200).json(formasDePagamento);
        } catch (error) {
            return res.status(400).json(error);
        }
    },

    delete: async (req, res) => {
        try {
            const {id} =req.body
            const formasDePagamento = await FormasDePagamento.destroy({
                where:{
                    id:id
                }
            });
            return res.status(200).json(formasDePagamento);
        } catch (error) {
            return res.status(400).json(error);
        }
        }
}

module.exports =formasDePagamentosController;