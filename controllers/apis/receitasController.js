const { Op } = require('sequelize');

const { Receita, Estocaveis, sequelize } = require('../../models');

const receitasController = {
    index: async (req, res) => {
        if(Object.keys(req.params).length === 0 && Object.keys(req.query).length === 0) {
            try {
                const receitas = await Receita.findAll({
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
                    },{
                        association: 'fabricado',
                        attributes: ['nome']
                    }]
                });

                return res.status(200).json(receitas);
            } catch (error) {
                return res.status(400).json(error);
            }
        } else if(Object.keys(req.params).length > 0) {
            try {
                const receitas = await Receita.findAll({
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
                    },{
                        association: 'fabricado',
                        attributes: ['nome']
                    }]
                });
                return res.status(200).json(receitas);
            } catch (error) {
                return res.status(400).json(error);
            }
        } else {
            const fieldName = Object.keys(req.query)[0]
            const queryValue = req.query[fieldName]
            try {
                const receitas = await Receita.findAll({
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
                    },{
                        association: 'fabricado',
                        attributes: ['nome']
                    }]
                });
                return res.status(200).json(receitas);
            } catch (error) {
                return res.status(400).json(error);                
            }
        }
    },

    create: async (req, res) => {
        let dados = req.body;

        try {
            const result = await sequelize.transaction(async (t) => {
                const receitaCadastrada = await Receita.create(dados, { transaction: t });

                const estocavelCadastrado = await Estocaveis.create({
                    nome: dados.nome,
                    tipo_id: 1,
                    unidade_id: 1,
                    quantidade: 0,
                    receita_id: receitaCadastrada.dataValues.id
                }, { transaction: t });

                const receita = {
                    id: receitaCadastrada.dataValues.id,
                    nome: estocavelCadastrado.dataValues.nome,
                    descricao: receitaCadastrada.dataValues.descricao,
                    tempo_preparo: receitaCadastrada.dataValues.tempo_preparo,
                    rendimento: receitaCadastrada.dataValues.rendimento,
                    foto: receitaCadastrada.dataValues.foto,
                }

                return receita;
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
            //Permite alterações enviando id pelo endpoint e informações pelo body [/receitas/:id]
            id = req.params.id;
            dados = req.body;
        } else {
            //Permite alterações enviando id pelo endpoint e informações por query [/receitas/:id?atributo=valorAtualizado]
            id = req.params.id;
            dados = req.query;
        }

        try {
            await sequelize.transaction(async (t) => {
                if ("nome" in dados) {
                    await Estocaveis.update({
                        nome: dados.nome
                    }, {
                        where: {
                            receita_id: id
                        },
                        transaction: t
                    })
                }

                await Receita.update(dados, {
                    where: {
                        id
                    },
                    transaction: t
                });

                return;
            })

            const result = await Receita.findByPk(id);

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
            //Permite deletar enviando id pelo endpoint [/receitas/:id]
            id = req.params.id;
        }

        try {
            await sequelize.transaction(async (t) => {
                await Estocaveis.destroy({
                    where: {
                        receita_id: id
                    },
                    transaction: t
                })

                await Receita.destroy({
                    where: {
                        id
                    },
                    transaction: t
                });

                return;
            })

            const result = await Receita.findByPk(id, {paranoid:false});

            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error);
        };
    }
}

module.exports = receitasController;
