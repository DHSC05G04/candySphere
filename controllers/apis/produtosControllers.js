const {
    Produto
} = require('../../models');

const produtoController = {
    index: async (req, res) => {
        try {
            const produtos = await Produto.findAll();
            return res.status(200).json(produtos);
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    store: (req, res) => {
        const {
            estoque_id,
            receita_id,
            valor
        } = req.body
        try {
            const produto = await Produto.create({
                estoque_id,
                receita_id,
                valor,
            });
            return res.status(201).json(produto);
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    update: async (req, res) => {
        const {
            id,
            estoque_id,
            receita_id,
            valor
        } = req.body
        try {
            const produto = await Produto.update({
                estoque_id,
                receita_id,
                valor,
            },{
                where:{
                    id:id
                }
            });
            return res.status(200).json(produto);
        } catch (error) {
            return res.status(400).json(error)
        }

    },

    delete: (req, res) => {
        const id = req.body.id;
        try {
            const produto = Produto.destroy({
                where:{
                    id
                }
            });
            return res.status(200).json(produto);
        } catch (error) {
            return res.status(400).json(error)
        }
    }
};

module.exports = estocaveisController;