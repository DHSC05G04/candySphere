const { Op } = require('sequelize');

const { Cliente, sequelize } = require('../../models');

const clientesController = {
    index: async (req, res) => {
        if(Object.keys(req.params).length === 0 && Object.keys(req.query).length === 0) {
            try {
                const clientes = await Cliente.findAll();
    
                return res.status(200).json(clientes);
            } catch (error) {
                return res.status(400).json(error);
            }
        } else if(Object.keys(req.params).length > 0) {
            try {
                const clientes = await Cliente.findAll({
                    where: {
                        id: req.params.id
                    }
                });
                
                return res.status(200).json(clientes);
            } catch (error) {
                return res.status(400).json(error);
            }
        } else {
            const fieldName = Object.keys(req.query)[0]
            const queryValue = req.query[fieldName]
            try {
                const clientes = await Cliente.findAll({
                    where: {
                        [fieldName]: {
                            [Op.like]: `%${queryValue}%`
                        }
                    }
                });
                return res.status(200).json(clientes);
            } catch (error) {
                return res.status(400).json(error);                
            }
        }
    },
    
    create: async (req, res) => {
        let dados = req.body;
    
        try {
            const result = await sequelize.transaction(async (t) => {
                const clienteCadastrado = await Cliente.findOrCreate({
                  where: {
                    cpf: dados.cpf,
                  },
                  defaults: dados,
                  transaction: t
                });
    
                return clienteCadastrado;
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
            //Permite alterações enviando id pelo endpoint e informações pelo body [/clientes/:id]
            id = req.params.id;
            dados = req.body;
        } else {
            //Permite alterações enviando id pelo endpoint e informações por query [/clientes/:id?atributo=valorAtualizado]
            id = req.params.id;
            dados = req.query;
        }
    
        try {
            await sequelize.transaction(async (t) => {
                await Cliente.update(dados, {
                    where: {
                        id
                    },
                    transaction: t
                });
    
                return;
            })
    
            const result = await Cliente.findByPk(id);
    
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
            //Permite deletar enviando id pelo endpoint [/clientes/:id]
            id = req.params.id;
        }
    
        try {
            await sequelize.transaction(async (t) => {
                await Cliente.destroy({
                    where: {
                        id
                    },
                    transaction: t
                });
    
                return;
            })
    
            const result = await Cliente.findByPk(id, {paranoid:false});
    
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error);
        };
      }
}

module.exports = clientesController;
