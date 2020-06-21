var express = require('express');
var router = express.Router();
let clienteController = require('../controllers/clienteController');
const isAuthenticated = require('../middlewares/isAuthenticated');

router.use(isAuthenticated);

/* GET clientes page. */
router.get('/',clienteController.index)
router.get('/ver/:id',clienteController.view)
router.post('/',clienteController.store)
router.get('/:id',(clienteController.show))
router.put('/',(clienteController.update))
router.delete('/:id',(clienteController.delete))


module.exports = router;