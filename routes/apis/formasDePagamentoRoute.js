const express = require('express');

const formaDePagamentoController = require('../../controllers/apis/formaDePagamentoController');

const router = express.Router();

router.get('/',formaDePagamentoController.index)

module.exports = router;