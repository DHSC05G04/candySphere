const express = require('express');

const recebimentosController = require('../../controllers/apis/recebimentosController');

const router = express.Router();

router.get('/',recebimentosController.index)
router.post('/',recebimentosController.store)
router.put('/',recebimentosController.update)
router.delete('/',recebimentosController.delete)

module.exports = router;