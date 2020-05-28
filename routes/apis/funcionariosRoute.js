const express = require('express');

const funcionariosControllers = require('../../controllers/apis/funcionarioControllers');

const router = express.Router();

router.get('/',funcionariosControllers.index)

module.exports = router;