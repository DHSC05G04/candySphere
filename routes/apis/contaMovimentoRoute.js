const express = require('express');

const contaMovimentoController = require('../../controllers/apis/contaMovimentoController');

const router = express.Router();

router.get('/',contaMovimentoController.index)
router.post('/',contaMovimentoController.store)
router.put('/',contaMovimentoController.update)
router.delete('/',contaMovimentoController.delete)

module.exports = router;