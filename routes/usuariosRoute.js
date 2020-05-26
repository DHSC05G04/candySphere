var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioControllers')

router.get('/cadastrar',(usuarioController.store))



module.exports = router;