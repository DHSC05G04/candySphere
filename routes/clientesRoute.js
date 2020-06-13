var express = require('express');
var router = express.Router();
let clienteController = require('../controllers/clienteController');
/* GET clientes page. */
router.get('/',clienteController.index)
router.post('/',clienteController.store)
router.get('/:id',(clienteController.show))
router.put('/',(clienteController.update))
router.delete('/:id',(clienteController.delete))

module.exports = router;