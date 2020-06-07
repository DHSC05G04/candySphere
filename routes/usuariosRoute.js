var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioControllers')


router.post('/',(usuarioController.store))
router.get('/',(usuarioController.index))



module.exports = router;