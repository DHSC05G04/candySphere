const { Op } = require('sequelize');

const { Produto, sequelize } = require('../../models');

const produtosController = {
    index: async (req, res) => {
        if(Object.keys(req.params).length === 0 && Object.keys(req.query).length === 0) {
            try {
                const produtos = await Produto.findAll({
                    include: [{
                        association: 'instrucoes',
                        attributes: ['instrucao']
                    },{
                        association: 'ingredientes',
                        attributes: ['quantidade'],
                        include: [{
                            association: 'componente',
                            attributes: ['nome']
                        },{
                            association: 'unidade',
                            attributes: ['unidade']
                        }]
                    }]
                });

                return res.status(200).json(produtos);
            } catch (error) {
                return res.status(400).json(error);
            }
        } else if(Object.keys(req.params).length > 0) {
            try {
                const produtos = await Produto.findAll({
                    where: {
                        id: req.params.id
                    },
                    include: [{
                        association: 'instrucoes',
                        attributes: ['instrucao']
                    },{
                        association: 'ingredientes',
                        attributes: ['quantidade'],
                        include: [{
                            association: 'componente',
                            attributes: ['nome']
                        },{
                            association: 'unidade',
                            attributes: ['unidade']
                        }]
                    }]
                });
                return res.status(200).json(produtos);
            } catch (error) {
                return res.status(400).json(error);
            }
        } else {
            const fieldName = Object.keys(req.query)[0]
            const queryValue = req.query[fieldName]
            try {
                const produtos = await Produto.findAll({
                    where: {
                        [fieldName]: {
                            [Op.like]: `%${queryValue}%`
                        }
                    },
                    include: [{
                        association: 'instrucoes',
                        attributes: ['instrucao']
                    },{
                        association: 'ingredientes',
                        attributes: ['quantidade'],
                        include: [{
                            association: 'componente',
                            attributes: ['nome']
                        },{
                            association: 'unidade',
                            attributes: ['unidade']
                        }]
                    }]
                });
                return res.status(200).json(produtos);
            } catch (error) {
                return res.status(400).json(error);                
            }
        }
    },

    create: async (req, res) => {
        let dados = req.body;

        try {
            const result = await sequelize.transaction(async (t) => {
                const produtoCadastrado = await Produto.create(dados, { transaction: t });

                return produtoCadastrado;
            });

            return res.status(200).json(result);

        } catch (error) {
            return res.status(400).json(error);
        };
    },

    update: async (req, res) => {
        let id
        let dados

        if(Object.keys(req.params).length === 0) {
            //Permite alterações enviando todas informações pelo body
            id = req.body.id;
            dados = req.body;
        } else if(Object.keys(req.query).length === 0) {
            //Permite alterações enviando id pelo endpoint e informações pelo body [/produtos/:id]
            id = req.params.id;
            dados = req.body;
        } else {
            //Permite alterações enviando id pelo endpoint e informações por query [/produtos/:id?atributo=valorAtualizado]
            id = req.params.id;
            dados = req.query;
        }

        try {
            await sequelize.transaction(async (t) => {
                await Produto.update(dados, {
                    where: {
                        id
                    },
                    transaction: t
                });

                return;
            })

            const result = await Produto.findByPk(id);

            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error);
        };
    },

    delete: async (req, res) => {
        let id

        if(Object.keys(req.params).length === 0) {
            //Permite deletar enviando id pelo body
            id = req.body.id;
        } else {
            //Permite deletar enviando id pelo endpoint [/produtos/:id]
            id = req.params.id;
        }

        try {
            await sequelize.transaction(async (t) => {
                await Produto.destroy({
                    where: {
                        id
                    },
                    transaction: t
                });

                return;
            })

            const result = await Produto.findByPk(id, {paranoid:false});

            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error);
        };
    }
}

module.exports = produtosController;
