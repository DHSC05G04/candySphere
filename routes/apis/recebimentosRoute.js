const express = require('express');

const recebimentosController = require('../../controllers/apis/recebimentosController');

const router = express.Router();

router.get('/',recebimentosController.index)

module.exports = router;