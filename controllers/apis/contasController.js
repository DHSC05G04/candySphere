const {Conta,Usuario,Funcionario} = require('../../models');

const contasController ={

    index: async (req,res) =>{
             try {
            const conta = await Conta.findAll({
                include:[{
                 model:Usuario,
                 as:"usuario",
                 attributes: ['nome_usuario','acesso'],
                 required:false,
                 include:[{
                        model:Funcionario,
                        attributes: ['nome','email',"endereco","telefone","avatar","salario"],
                        as:'funcionario',
                        required:false,
                 }]          
             }]},
             {order:['id',"ASC"]}
             )
             return res.status(200).json(conta)
        } catch (error) {
            return res.status(400).json(conta)
        }
    },
    store: async (req,res) =>{
        try {
                const {valor,descricao,aprovado,usuarios_id} = req.body
        const conta = await Conta.create({valor,aprovado,usuarios_id,descricao});
            return res.status(201).json(conta)

        } catch (error) {
            return res.status(400).json(error)

        }
       
       
    },
    update: async (req,res) =>{
        try {
            const {id,valor,aprovado,usuarios_id,descricao} = req.body
        const conta = await Conta.update({valor,aprovado,usuarios_id,descricao},{
                    where:{id}
        });
        return res.status(200).json(conta)

    } catch (error) {
        return res.status(400).json(error)

    }
    },
    delete: async (req,res) =>{
        try {
            const {id} = req.body
        const conta = await Conta.destroy({
            where:{id}
        });
        return res.status(200).json(conta)

    } catch (error) {
        return res.status(400).json(error)

    }
    }

}

module.exports = contasController