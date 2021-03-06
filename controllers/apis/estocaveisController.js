const { Op } = require('sequelize');
const { Estocaveis, TiposItens, Produto, sequelize } = require('../../models');

const estocaveisController = {
    index: async (req, res) => {
        if(Object.keys(req.params).length === 0 && Object.keys(req.query).length === 0) {
            try {
                const estocaveis = await Estocaveis.findAll({
                    attributes: ['id', 'nome', 'quantidade', 'custo_unitario',
                        'validade', 'vendavel', 'receita_id', 'foto', 'tipo_id', 'createdAt', 'updatedAt'],
                    include: [{
                        association: 'classe',
                        attributes: ['tipo']
                    },{
                        association: 'unMedida',
                        attributes: ['unidade']
                    }]
                });

                return res.status(200).json(estocaveis);                
            } catch (error) {
                return res.status(400).json(error);
            }
        } else if(Object.keys(req.params).length > 0) {
            try {
                const estocaveis = await Estocaveis.findAll({
                    where: {
                        id: req.params.id
                    },
                    attributes: ['id', 'nome', 'quantidade', 'custo_unitario',
                    'validade', 'vendavel', 'receita_id', 'foto', 'tipo_id', 'createdAt', 'updatedAt'],
                    include: [{
                        association: 'classe',
                        attributes: ['tipo']
                    },{
                        association: 'unMedida',
                        attributes: ['unidade']
                    }]
                });
                return res.status(200).json(estocaveis);                                
            } catch (error) {
                return res.status(400).json(error);
            }
        } else {
            const fieldName = Object.keys(req.query)[0]
            const queryValue = req.query[fieldName]
            try {
                const estocaveis = await Estocaveis.findAll({
                    where: {
                        [fieldName]: {
                            [Op.like]: `%${queryValue}%`
                        }
                    },
                    attributes: ['id', 'nome', 'quantidade', 'custo_unitario',
                    'validade', 'vendavel', 'receita_id', 'foto', 'tipo_id', 'createdAt', 'updatedAt'],
                    include: [{
                        association: 'classe',
                        attributes: ['tipo']
                    },{
                        association: 'unMedida',
                        attributes: ['unidade']
                    }]
                });
                return res.status(200).json(estocaveis);
            } catch (error) {
                return res.status(400).json(error);                
            }
        }
    },

    create: async (req, res) => {
        let dados = req.body;

        try {
            const result = await sequelize.transaction(async (t) => {
                const itemCadastradoAPI = await Estocaveis.create(dados, { transaction: t });
                const checkProduto = await itemCadastradoAPI.dataValues

                if(checkProduto.vendavel == true) {
                    const dadosProduto = {
                        estoque_id: checkProduto.id,
                        valor: checkProduto.custo_unitario
                    }
                    const produtoCadastrado = await Produto.findOrCreate({
                        where: {
                            estoque_id: dadosProduto.estoque_id,
                        },
                        defaults: dadosProduto,
                        transaction: t
                    })
                }

                return itemCadastradoAPI;
                })

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
            //Permite alterações enviando id pelo endpoint e informações pelo body [/estocaveis/:id]
            id = req.params.id;
            dados = req.body;
        } else {
            //Permite alterações enviando id pelo endpoint e informações por query [/estocaveis/:id?unidade=valorAtualizado]
            id = req.params.id;
            dados = req.query;
        }

        try {
            await sequelize.transaction(async (t) => {
                await Estocaveis.update(dados, {
                    where: {
                        id
                    },
                    transaction: t
                });

                if('vendavel' in dados) {
                    if(dados.vendavel == 'true') {
                        const dadosProduto = {
                            estoque_id: id,
                            valor: dados.custo_unitario
                        }
                        await Produto.findOrCreate({
                            where: {
                                estoque_id: id,
                            },
                            defaults: dadosProduto,
                            transaction: t
                        })                        
                    } else {
                        await Produto.destroy({
                            where: {
                                estoque_id: id
                            },
                            transaction: t       
                    })}
                }

                return;
            })

            const result = await Estocaveis.findByPk(id);

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
            //Permite deletar enviando id pelo endpoint [/estocaveis/:id]
            id = req.params.id;
        }

        try {
            await sequelize.transaction(async (t) => {
                await Estocaveis.destroy({
                    where: {
                        id
                    },
                    transaction: t
                });

                return;
            })

            const result = await Estocaveis.findByPk(id, {paranoid:false});

            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error);
        };
    }
};

module.exports = estocaveisController;
