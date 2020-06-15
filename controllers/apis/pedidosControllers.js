const {
    Pedido
} = require('../../models');

const pedidosController = {
    index: async (req, res) => {
        const pedido = await Pedido.findAll({
            include:[
                {
                association:'cliente',
                attributes: ['cpf','nome','email',"endereco","telefone",]
            },
        ] 
        })
        try {
            
            return res.status(200).json(pedido);

        } catch (error) {
            return res.status(400).json(error);
        }



    },
    store: async (req, res) => {
       
       try {
           const pedido = await Pedido.create(req.body)
           return res.status(201).json(pedido)
           
       } catch (error) {
        return res.status(400).json(error);
       }
    },

    update: async (req, res) => {
        const {
            id,
            entrada,
            entrega,
            total,
            sinal,
            observacao,
            status_id,
            caixa_id,
            cliente_id

        } = req.body
        try {
            const pedido = await Pedido.update({
                entrada:entrada,
                entrega:entrega,
                total:total,
                sinal:sinal,
                observacao:observacao,
                status_id:status_id,
                caixa_id:caixa_id,
                cliente_id:cliente_id},{
                where:{
                    id:id
                }
            });
            return res.status(200).json(pedido);
        } catch (error) {
            return res.status(400).json(error)
        }

    },

    delete: async (req, res) => {
        const id = req.body;
        try {
            const pedido = await Pedido.destroy({
                where: {
                    id:id
                }
            });
            return res.status(200).json(pedido);
        } catch (error) {
            return res.status(400).json(error)
        }
    }
};

module.exports = pedidosController;