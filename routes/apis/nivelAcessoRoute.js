const express = require('express');

const statusController = require('../../controllers/apis/nivelAcessoController');

const router = express.Router();

router.get('/',statusController.index)

module.exports = router;