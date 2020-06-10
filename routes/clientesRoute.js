var express = require('express');
var router = express.Router();
let clienteController = require('../controllers/clienteController');
/* GET clientes page. */
router.get('/',clienteController.index)
router.post('/',clienteController.store)

router.get('/cadastrarCliente',(req,res)=>{
    res.send("<h1>deu certo</h1>")
})

module.exports = router;