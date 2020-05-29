const {FormasDePagamento} = require("../../models");

const formasDePagamentosController = {

    index: async (req, res) => {
        const formasDePagamento = await FormasDePagamento.findAll();
        console.log(formasDePagamento)
    },

    store: (req, res) => {

    },

    update: (req, res) => {

    },

    delete: (req, res) => {

        }
}

module.exports =formasDePagamentosController;