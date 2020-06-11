const { Op } = require('sequelize');

const { UnidadesPorTipo, sequelize } = require('../../models');

const unidadesPorTipoController = {
    index: async (req, res) => {
        if(Object.keys(req.params).length === 0 && Object.keys(req.query).length === 0) {
            try {
                const unPorTipo = await UnidadesPorTipo.findAll({
                    include: [{
                        association: 'categoria',
                        attributes: ['id', 'tipo']
                    },{
                        association: 'medida',
                        attributes: ['id', 'unidade']
                    }]
                });
                return res.status(200).json(unPorTipo);                
            } catch (error) {
                return res.status(400).json(error);
            }
        } else if(Object.keys(req.params).length > 0) {
            try {
                const unPorTipo = await UnidadesPorTipo.findAll({
                    where: {
                        id: req.params.id
                    },
                    include: [{
                        association: 'categoria',
                        attributes: ['id', 'tipo']
                    },{
                        association: 'medida',
                        attributes: ['id', 'unidade']
                    }]
                });
                return res.status(200).json(unPorTipo);                                
            } catch (error) {
                return res.status(400).json(error);
            }
        } else {
            const fieldName = Object.keys(req.query)[0]
            const queryValue = req.query[fieldName]
            try {
                const unPorTipo = await UnidadesPorTipo.findAll({
                    where: {
                        [fieldName]: {
                            [Op.like]: `%${queryValue}%`
                        }
                    },
                    include: [{
                        association: 'categoria',
                        attributes: ['id', 'tipo']
                    },{
                        association: 'medida',
                        attributes: ['id', 'unidade']
                    }]
                });
                return res.status(200).json(unPorTipo);
            } catch (error) {
                return res.status(400).json(error);                
            }
        }
    },

    create: async (req, res) => {
        const dados = req.body;

        try {
            const result = await sequelize.transaction(async (t) => {
                const [unPorTipoCadastrada, created] = await UnidadesPorTipo.findOrCreate({
                    where: {
                        tipo_id: dados.tipo_id,
                        unidade_id: dados.unidade_id
                    },
                    transaction: t
                });

                return [unPorTipoCadastrada, created];
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
            //Permite alterações enviando id pelo endpoint e informações pelo body [/unidadesportipo/:id]
            id = req.params.id;
            dados = req.body;
        } else {
            //Permite alterações enviando id pelo endpoint e informações por query [/unidadesportipo/:id?param=valorAtualizado]
            id = req.params.id;
            dados = req.query;
        }

        try {
            await sequelize.transaction(async (t) => {
                await UnidadesPorTipo.update(dados, {
                    where: {
                        id
                    },
                    transaction: t
                });

                return;
            })

            const result = await UnidadesPorTipo.findByPk(id);

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
                await UnidadesPorTipo.destroy({
                    where: {
                        id
                    },
                    transaction: t
                });

                return;
            })

            const result = await UnidadesPorTipo.findByPk(id, {paranoid:false});

            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error);
        };
    }
}

module.exports = unidadesPorTipoController;
