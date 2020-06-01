const {Recebimento} = require('../../models')
const recebimentosControllers = {

    index: async (req, res) => {
       try {
        const recebimento = await Recebimento.findAll({
            include:[
                {
                association:'pedido',
                attributes: ['entrada','entrega','total','sinal','obervacao'],
               
            },
                {
                association:'caixa',
               attributes: ['hora_abertura','hora_fechamento','terminal_id','usuario_id'],
             
            },
                {
                association:'forma_pagamento',
             
               
            },
            
        ] 
        });
           return res.status(200).json(recebimento);
       } catch (error) {

        return res.status(400).json(error);
       }
      
    },
    store: async (req,res) =>{
        try {
            const {valor,aprovado,pedido_id,caixa_id,forma_pagamento_id} = req.body
            const recebimento =  await Recebimento.create({
                valor:valor,
                aprovado:aprovado,
                pedido_id:pedido_id,
                caixa_id:caixa_id,
                forma_pagamento_id:forma_pagamento_id
            });
            return res.status(201).json(recebimento);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    update: async (req,res) =>{
        try {
            const {id,valor,aprovado,pedido_id,caixa_id,forma_pagamento_id} = req.body
            const recebimento =  await Recebimento.update({
                valor:valor,
                aprovado:aprovado,
                pedido_id:pedido_id,
                caixa_id:caixa_id,
                forma_pagamento_id:forma_pagamento_id
            },{
                where:{
                    id:id
                }
            });
            return res.status(200).json(recebimento);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    delete: async (req,res) =>{
        try {
            const {id} = req.body
            const recebimento =  await Recebimento.destroy({
              
                where:{
                    id:id
                }
            });
            return res.status(200).json(recebimento);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
}

module.exports =recebimentosControllers