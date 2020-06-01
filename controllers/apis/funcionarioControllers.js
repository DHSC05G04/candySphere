const { Op } = require('sequelize');

const { Funcionario, sequelize } = require('../../models');

const funcionarioController = {
  index: async (req, res) => {
    if(Object.keys(req.params).length === 0 && Object.keys(req.query).length === 0) {
        try {
            const funcionarios = await Funcionario.findAll();

            return res.status(200).json(funcionarios);
        } catch (error) {
            return res.status(400).json(error);
        }
    } else if(Object.keys(req.params).length > 0) {
        try {
            const funcionarios = await Funcionario.findAll({
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).json(funcionarios);
        } catch (error) {
            return res.status(400).json(error);
        }
    } else {
        const fieldName = Object.keys(req.query)[0]
        const queryValue = req.query[fieldName]
        try {
            const funcionarios = await Funcionario.findAll({
                where: {
                    [fieldName]: {
                        [Op.like]: `%${queryValue}%`
                    }
                }
            });
            return res.status(200).json(funcionarios);
        } catch (error) {
            return res.status(400).json(error);                
        }
    }
},

create: async (req, res) => {
    let dados = req.body;

    try {
        const result = await sequelize.transaction(async (t) => {
            const funcionarioCadastrado = await Funcionario.findOrCreate({
              where: {
                nome: dados.nome
              },
              defaults: dados,
              transaction: t
            });

            return funcionarioCadastrado;
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
        //Permite alterações enviando id pelo endpoint e informações pelo body [/funcionarios/:id]
        id = req.params.id;
        dados = req.body;
    } else {
        //Permite alterações enviando id pelo endpoint e informações por query [/funcionarios/:id?atributo=valorAtualizado]
        id = req.params.id;
        dados = req.query;
    }

    try {
        await sequelize.transaction(async (t) => {
            await Funcionario.update(dados, {
                where: {
                    id
                },
                transaction: t
            });

            return;
        })

        const result = await Funcionario.findByPk(id);

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
        //Permite deletar enviando id pelo endpoint [/funcionarios/:id]
        id = req.params.id;
    }

    try {
        await sequelize.transaction(async (t) => {
            await Funcionario.destroy({
                where: {
                    id
                },
                transaction: t
            });

            return;
        })

        const result = await Funcionario.findByPk(id, {paranoid:false});

        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json(error);
    };
  }
}

module.exports = funcionarioController;
