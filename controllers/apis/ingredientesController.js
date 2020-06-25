const { Op } = require('sequelize');

const { Ingrediente, sequelize } = require('../../models');

const ingredientesController = {
    index: async (req, res) => {
        if(Object.keys(req.params).length === 0 && Object.keys(req.query).length === 0) {
            try {
                const ingredientes = await Ingrediente.findAll({
                    include: [{
                        association: 'componente',
                        attributes: ['id', 'tipo_id', 'nome']
                    },{
                        association: 'unidade',
                        attributes: ['id', 'unidade']
                    }]
                });

                return res.status(200).json(ingredientes);
            } catch (error) {
                return res.status(400).json(error);
            }
        } else if(Object.keys(req.params).length > 0) {
            try {
                const ingredientes = await Ingrediente.findAll({
                    where: {
                        id: req.params.id
                    },
                    include: [{
                        association: 'componente',
                        attributes: ['id', 'tipo_id', 'nome']
                    },{
                        association: 'unidade',
                        attributes: ['id', 'unidade']
                    }]
                });
                return res.status(200).json(ingredientes);
            } catch (error) {
                return res.status(400).json(error);
            }
        } else {
            const fieldName = Object.keys(req.query)[0]
            const queryValue = req.query[fieldName]
            try {
                const ingredientes = await Ingrediente.findAll({
                    where: {
                        [fieldName]: {
                            [Op.like]: `%${queryValue}%`
                        }
                    },
                    include: [{
                        association: 'componente',
                        attributes: ['id', 'tipo_id', 'nome']
                    },{
                        association: 'unidade',
                        attributes: ['id', 'unidade']
                    }]
                });
                return res.status(200).json(ingredientes);
            } catch (error) {
                return res.status(400).json(error);                
            }
        }
    },

    create: async (req, res) => {
        let dados = req.body;

        try {
            const result = await sequelize.transaction(async (t) => {
                const ingredienteCadastrado = await Ingrediente.create(dados, { transaction: t });

                return ingredienteCadastrado;
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
            //Permite alterações enviando id pelo endpoint e informações pelo body [/ingredientes/:id]
            id = req.params.id;
            dados = req.body;
        } else {
            //Permite alterações enviando id pelo endpoint e informações por query [/ingredientes/:id?atributo=valorAtualizado]
            id = req.params.id;
            dados = req.query;
        }

        try {
            await sequelize.transaction(async (t) => {
                await Ingrediente.update(dados, {
                    where: {
                        id
                    },
                    transaction: t
                });

                return;
            })

            const result = await Ingrediente.findByPk(id);

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
            //Permite deletar enviando id pelo endpoint [/ingredientes/:id]
            id = req.params.id;
        }

        try {
            await sequelize.transaction(async (t) => {
                await Ingrediente.destroy({
                    where: {
                        id
                    },
                    transaction: t
                });

                return;
            })

            const result = await Ingrediente.findByPk(id, {paranoid:false});

            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error);
        };
    }
}

module.exports = ingredientesController;
