const {NivelAcesso} = require("../../models");
const nivelAcessoController = {
   
        index: async (req, res) => {
            
            try {
                const nivelAcesso = await NivelAcesso.findAll({
                    order:[
                        ['descricao', 'ASC']

                    ]}
                )
                return res.status(200).json(nivelAcesso)
               
            } catch (error) {
                return res.status(400).json(error)
            }

        },
   
}

module.exports =nivelAcessoController;
