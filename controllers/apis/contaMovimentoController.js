const {
    ContaMovimento,
    Recebimento,
    Pagamento
} = require("../../models");
const contaMovimentoController = {

    index: async (req, res) => {

        try {
            const movimento = await ContaMovimento.findAll({
                include: [{
                        model: Recebimento,
                        as: "recebimento",
                        attributes: ['valor', 'aprovado'],

                    },
                    {
                        model: Pagamento,
                        as: "pagamento",
                        attributes: ['data_pgto', 'valor', 'obervacao'],
                    },
                ]
            })

            return res.status(200).json(movimento)

        } catch (error) {

            return res.status(400).json(error)

        }



    },
    store: async (req, res) => {
        try {
            const {
                data,
                saldo,
                obervacao,
                recebimentos_id,
                pagamento_id
            } = req.body
            const contaMovimento = await ContaMovimento.create({
                data,
                saldo,
                obervacao,
                recebimentos_id,
                pagamento_id
            });
            return res.status(201).json(contaMovimento)

        } catch (error) {
            return res.status(400).json(error)

        }


    },
    update: async (req, res) => {

        try {
            const {
                id,
                data,
                saldo,
                obervacao,
                recebimentos_id,
                pagamento_id
            } = req.body
            const contaMovimento = await ContaMovimento.update({
                data,
                saldo,
                obervacao,
                recebimentos_id,
                pagamento_id
            }, {
                where: {
                    id
                }
            });
            return res.status(200).json(contaMovimento)

        } catch (error) {
            return res.status(400).json(error)

        }

    },
    delete: async (req, res) => {
        try {
            const {
                id
            } = req.body
            const contaMovimento = await ContaMovimento.destroy({
                where: {
                    id
                }
            });
            return res.status(200).json(contaMovimento)
        } catch (error) {
            return res.status(400).json(error)

        }

    }
}
module.exports = contaMovimentoController;