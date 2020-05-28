const {Funcionario} = require('../../models')

const funcionarioController = {
    index: async (req, res) => {
      try {
        const funcionario = await Funcionario.findAll();
        return res.status(200).json(funcionario)

      } catch (error) {
        return res.status(400).json(error)
      }
         
          
}
}
module.exports = funcionarioController;