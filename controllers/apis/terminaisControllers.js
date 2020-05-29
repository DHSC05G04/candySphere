const {Terminal} = require('../../models');

const terminaisControllers = {

    
        index: async (req, res) => {
            try {
                const terminal = await Terminal.findAll();
                return res.status(200).json(terminal)
            } catch (error) {
                return res.status(400).json(error)
            }
           
           
        },
    
        store:async (req, res) => {
            try {
                const terminal = await Terminal.create(req.body);
                return res.status(201).json(terminal)
            } catch (error) {
                return res.status(400).json(error)
            }
           
        },
    
        update: async (req, res) => {
            try {
                const {id,descricao} = req.body
                const terminal = await Terminal.update({
                    descricao:descricao},
                    {
                    where:{id: id}
                    });
                return res.status(200).json(terminal)
            } catch (error) {
                return res.status(400).json(error)
            }
        },
    
        delete:async (req, res) => {
            try {
                const {id} = req.body
                const terminal = await Terminal.destroy({
                    where: {
                        id: id
                    }
                })
                return res.status(200).json(terminal)
            } catch (error) {
                return res.status(400).json(error)
            }
            }
    };


module.exports =terminaisControllers;