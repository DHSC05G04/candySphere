const {Pedidos} = require('../../models');

const pedidosController = {
    index: async (req, res) => {
        try {
            
            const pedido = await Pedidos.findAll();
           
            return res.res.status(200).json(pedido);
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    store: async (req, res) => {
        const {
            entrada,
            entrega,
            total,
            sinal,
            obervacao,
            status_id,
            caixa_id,
            cliente_id

        } = req.body
        try {
            const pedido = await Pedidos.create({
                entrada,
                entrega,
                total,
                sinal,
                obervacao,
                status_id,
                caixa_id,
                cliente_id
            });
            return res.status(201).json(pedido);
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
            const pedido = await Pedidos.update({
                estoque_id,
                receita_id,
                valor,
            },{
                where:{
                    id:id
                }
            });
            return res.status(200).json(pedido);
        } catch (error) {
            return res.status(400).json(error)
        }

    },

    delete: (req, res) => {
        const id = req.body.id;
        try {
            const pedido = Pedidos.destroy({
                where:{
                    id
                }
            });
            return res.status(200).json(pedido);
        } catch (error) {
            return res.status(400).json(error)
        }
    }
};

module.exports = pedidosController;