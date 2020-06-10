var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioControllers')



router.get('/',(usuarioController.index))
router.post('/',(usuarioController.store))
router.put('/',(usuarioController.update))
router.delete('/',(usuarioController.delete))



module.exports = router;