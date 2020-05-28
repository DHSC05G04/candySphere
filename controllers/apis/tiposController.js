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
                console.log(req.query)
                console.log(req.query.tipo)
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

    },

    delete: async (req, res) => {

    }
}

module.exports = tiposController;