const { Op } = require('sequelize');

const { TiposItens, sequelize } = require('../../models');

const tiposController = {
    index: async (req, res) => {
        if(Object.keys(req.params).length === 0 && Object.keys(req.query).length === 0) {
            try {
                const tipos = await TiposItens.findAll();
                return res.status(200).json(tipos);                
            } catch (error) {
                return res.status(400).json(error);
            }
        } else if(Object.keys(req.params).length > 0) {
            try {
                const tipos = await TiposItens.findAll({
                    where: {
                        id: req.params.id
                    }
                });
                return res.status(200).json(tipos);                                
            } catch (error) {
                return res.status(400).json(error);
            }
        } else {
            const fieldName = Object.keys(req.query)[0]
            const queryValue = req.query[fieldName]
            try {
                const tipos = await TiposItens.findAll({
                    where: {
                        [fieldName]: {
                            [Op.like]: `%${queryValue}%`
                        }
                    }
                });
                return res.status(200).json(tipos);
            } catch (error) {
                return res.status(400).json(error);                
            }
        }
    },

    create: async (req, res) => {
        const {tipo} = req.body;

        try {
            const result = await sequelize.transaction(async (t) => {
                const [tipoCadastrado, created] = await TiposItens.findOrCreate({
                    where: {
                        tipo
                    },
                    transaction: t
                });

                return [tipoCadastrado, created];
            });

            return res.status(200).json(result);

        } catch (error) {
            return res.status(400).json(error);
        };
    },

    update: async (req, res) => {
        let id
        let tipo

        if(Object.keys(req.params).length === 0) {
            //Permite alterações enviando todas informações pelo body
            id = req.body.id;
            tipo = req.body.tipo;
        } else if(Object.keys(req.query).length === 0) {
            //Permite alterações enviando id pelo endpoint e informações pelo body [/tipos/:id]
            id = req.params.id;
            tipo = req.body.tipo;
        } else {
            //Permite alterações enviando id pelo endpoint e informações por query [/tipos/:id?tipo=valorAtualizado]
            id = req.params.id;
            tipo = req.query.tipo;
        }

        try {
            await sequelize.transaction(async (t) => {
                await TiposItens.update({tipo: tipo}, {
                    where: {
                        id
                    },
                    transaction: t
                });

                return;
            })

            const result = await TiposItens.findByPk(id);

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
            //Permite deletar enviando id pelo endpoint [/tipos/:id]
            id = req.params.id;
        }

        try {
            await sequelize.transaction(async (t) => {
                await TiposItens.destroy({
                    where: {
                        id
                    },
                    transaction: t
                });

                return;
            })

            const result = await TiposItens.findByPk(id, {paranoid:false});

            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error);
        };
    }
}

module.exports = tiposController;