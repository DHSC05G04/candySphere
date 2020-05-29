const {Status} = require("../../models");
const statusController = {
   
        index: async (req, res) => {
            
            try {
                const status = await Status.findAll()
                return res.status(200).json(status)
               
            } catch (error) {
                return res.status(400).json(error)
            }

        },
    
        store: async (req, res) => {

            try {
                
                const status = await Status.create(req.body)
                return res.status(200).json(status)
               
            } catch (error) {
                return res.status(400).json(error)
            }

        },
    
        update: async (req, res) => {
            try {
                const{id,descricao}=req.body
                const status = await Status.update(
                    {
                        descricao:descricao
                    },
                    {
                    where:{id:id}
                })
                return res.status(200).json(status)
               
            } catch (error) {
                return res.status(400).json(error)
            }
        },
    
        delete: async (req, res) => {
            try {
                const {id} = req.body
                const status = await Status.destroy({
                    where: {
                        id: id
                    }
                })
                return res.status(200).json(status)
               
            } catch (error) {
                return res.status(400).json(error)
            }

            }
   
}

module.exports =statusController;