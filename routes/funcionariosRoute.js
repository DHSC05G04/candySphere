var express = require('express');
var router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');

/* GET funcionarios page. */
router.get('/',funcionarioController.listarFuncionario)
router.get('/cadastrarFuncionario',(req,res)=>{
    res.send("<h1>deu certo</h1>")
})
router.get('/verFuncionario',funcionarioController.verFuncionario)

module.exports = router;