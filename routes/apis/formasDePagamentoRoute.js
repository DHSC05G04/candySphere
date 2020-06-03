const express = require('express');

const formasDePagamentoController = require('../../controllers/apis/formaDePagamentoController');

const router = express.Router();

router.get('/',formasDePagamentoController.index);
router.post('/',formasDePagamentoController.store);
router.put('/',formasDePagamentoController.update);
router.delete('/',formasDePagamentoController.delete);

module.exports = router