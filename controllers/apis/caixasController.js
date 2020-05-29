const {
    Caixa
} = require('../../models');
const caixasControllers = {
    index: async (req, res) => {
        try {
            const caixa = await Caixa.findAll({
                include:[
                    {
                    association:'usuario',
                    attributes: ['nome_usuario','acesso']
                },
                    {
                    association:'terminal',
                    attributes: ['descricao']
                }
            ] 
            });
            return res.status(200).json(caixa);
        } catch (error) {
            return res.status(400).json(error);
        }

    },
    store: async (req, res) => {

        try {
            const caixa = await Caixa.create(
               req.body
            );
            return res.status(200).json(caixa);
        } catch (error) {
            return res.status(400).json(error);
        }

    },

    update: async (req, res) => {
        try {
            const {
                id,
                hora_abertura,
                hora_fechamento,
                terminal_id,
                usuario_id
            } = req.body
            const caixa = await Caixa.update({
                hora_abertura,
                hora_fechamento,
                terminal_id,
                usuario_id
            }, {
                where: {
                    id: id
                }
            });
            return res.status(201).json(caixa);
        } catch (error) {
            return res.status(400).json(error);
        }

    },
    delete: async (req, res) => {
        try {
            const {
                id
            } = req.body;
            const caixa = await Caixa.destroy({
                where: {
                    id: id
                }
            })
            return res.status(200).json(caixa);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}
module.exports = caixasControllers;