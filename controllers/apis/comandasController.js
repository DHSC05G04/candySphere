const {
    Comanda
} = require('../../models');
const comandasControllers = {

    index: async (req, res) => {
       
        try {
            const comanda = await Comanda.findAll({
                include: [{
                        association: 'pedido',
                        attributes: ['entrada', 'entrega', 'total', 'sinal', 'observacao']
                    },
                    {
                        association: 'produto',
                        attributes: ['valor']
                    },

                ]
            });
            return res.status(200).json(comanda);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    store: async (req, res) => {
        try {
            const comanda = await Comanda.create(req.body)
            return res.status(201).json(comanda);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    update: async (req, res) => {
      
        try {
            const {id,nota_fiscal,pedido_id,produto_id} = req.body
            const comanda = await Comanda.update({nota_fiscal,pedido_id,produto_id},{
                where:{
                    id:id
                }
            });
            return res.status(200).json(comanda);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            const {id,nota_fiscal,pedido_id,produto_id} = req.body
            const comanda = await Comanda.destroy({
                where:{
                    id:id
                }
            });
            return res.status(200).json(comanda);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = comandasControllers;