const { Op } = require('sequelize');

const { Usuario, sequelize } = require('../../models');

const usuariosController = {
    index: async (req, res) => {
        if(Object.keys(req.params).length === 0 && Object.keys(req.query).length === 0) {
            try {
                const usuarios = await Usuario.findAll({
                    include: [{
                        association: 'funcionario',
                        attributes: ['nome', 'email', 'avatar']
                    }]
                });
    
                return res.status(200).json(usuarios);
            } catch (error) {
                return res.status(400).json(error);
            }
        } else if(Object.keys(req.params).length > 0) {
            try {
                const usuarios = await Usuario.findAll({
                    where: {
                        id: req.params.id
                    },
                    include: [{
                        association: 'funcionario',
                        attributes: ['nome', 'email', 'avatar']
                    }]
                });
                return res.status(200).json(usuarios);
            } catch (error) {
                return res.status(400).json(error);
            }
        } else {
            const fieldName = Object.keys(req.query)[0]
            const queryValue = req.query[fieldName]
            try {
                const usuarios = await Usuario.findAll({
                    where: {
                        [fieldName]: {
                            [Op.like]: `%${queryValue}%`
                        }
                    },
                    include: [{
                        association: 'funcionario',
                        attributes: ['nome', 'email', 'avatar']
                    }]
                });
                return res.status(200).json(usuarios);
            } catch (error) {
                return res.status(400).json(error);                
            }
        }
    },
    
    create: async (req, res) => {
        let dados = req.body;
    
        try {
            const result = await sequelize.transaction(async (t) => {
                const usuarioCadastrado = await Usuario.findOrCreate({
                  where: {
                    nome_usuario: dados.nome_usuario,
                  },
                  defaults: dados,
                  transaction: t
                });
    
                return usuarioCadastrado;
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
            //Permite alterações enviando id pelo endpoint e informações pelo body [/usuarios/:id]
            id = req.params.id;
            dados = req.body;
        } else {
            //Permite alterações enviando id pelo endpoint e informações por query [/usuarios/:id?atributo=valorAtualizado]
            id = req.params.id;
            dados = req.query;
        }
    
        try {
            await sequelize.transaction(async (t) => {
                await Usuario.update(dados, {
                    where: {
                        id
                    },
                    transaction: t
                });
    
                return;
            })
    
            const result = await Usuario.findByPk(id);
    
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
            //Permite deletar enviando id pelo endpoint [/usuarios/:id]
            id = req.params.id;
        }
    
        try {
            await sequelize.transaction(async (t) => {
                await Usuario.destroy({
                    where: {
                        id
                    },
                    transaction: t
                });
    
                return;
            })
    
            const result = await Usuario.findByPk(id, {paranoid:false});
    
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error);
        };
      }
}

module.exports = usuariosController;
