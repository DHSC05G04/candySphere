const express = require('express');

const pedidosController = require('../../controllers/apis/pedidosControllers');

const router = express.Router();

router.get('/',pedidosController.index)
router.post('/',pedidosController.store)
router.put('/',pedidosController.update)
router.delete('/',pedidosController.delete)
router.get('/:id',pedidosController.index)

module.exports = router;