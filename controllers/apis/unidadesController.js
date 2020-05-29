const { Op } = require('sequelize');

const { Unidade, sequelize } = require('../../models');

const unidadesController = {
    index: async (req, res) => {
        if(Object.keys(req.params).length === 0 && Object.keys(req.query).length === 0) {
            try {
                const unidades = await Unidade.findAll();
                return res.status(200).json(unidades);                
            } catch (error) {
                return res.status(400).json(error);
            }
        } else if(Object.keys(req.params).length > 0) {
            try {
                const unidades = await Unidade.findAll({
                    where: {
                        id: req.params.id
                    }
                });
                return res.status(200).json(unidades);                                
            } catch (error) {
                return res.status(400).json(error);
            }
        } else {
            const fieldName = Object.keys(req.query)[0]
            const queryValue = req.query[fieldName]
            try {
                console.log(req.query)
                console.log(req.query.unidade)
                const unidades = await Unidade.findAll({
                    where: {
                        [fieldName]: {
                            [Op.like]: `%${queryValue}%`
                        }
                    }
                });
                return res.status(200).json(unidades);
            } catch (error) {
                return res.status(400).json(error);                
            }
        }
    },

    create: async (req, res) => {
        const {unidade} = req.body;

        try {
            const result = await sequelize.transaction(async (t) => {
                const [unidadeCadastrada, created] = await Unidade.findOrCreate({
                    where: {
                        unidade
                    },
                    transaction: t
                });

                return [unidadeCadastrada, created];
            });

            return res.status(200).json(result);

        } catch (error) {
            return res.status(400).json(error);
        };
    },

    update: async (req, res) => {
        let id
        let unidade

        if(Object.keys(req.params).length === 0) {
            //Permite alterações enviando todas informações pelo body
            id = req.body.id;
            unidade = req.body.unidade;
        } else if(Object.keys(req.query).length === 0) {
            //Permite alterações enviando id pelo endpoint e informações pelo body [/unidades/:id]
            id = req.params.id;
            unidade = req.body.unidade;
        } else {
            //Permite alterações enviando id pelo endpoint e informações por query [/unidades/:id?unidade=valorAtualizado]
            id = req.params.id;
            unidade = req.query.unidade;
        }

        try {
            await sequelize.transaction(async (t) => {
                await Unidade.update({unidade: unidade}, {
                    where: {
                        id
                    },
                    transaction: t
                });

                return;
            })

            const result = await Unidade.findByPk(id);

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
            //Permite deletar enviando id pelo endpoint [/unidades/:id]
            id = req.params.id;
        }

        try {
            await sequelize.transaction(async (t) => {
                await Unidade.destroy({
                    where: {
                        id
                    },
                    transaction: t
                });

                return;
            })

            const result = await Unidade.findByPk(id, {paranoid:false});

            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error);
        };
    }
}

module.exports = unidadesController;
