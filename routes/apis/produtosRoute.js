const express = require('express');

const produtosController = require('../../controllers/apis/produtosController');

const router = express.Router();

router.get('/', produtosController.index);
router.get('/:id', produtosController.index);
router.post('/', produtosController.create);
router.put('/', produtosController.update);
router.put('/:id', produtosController.update);
router.delete('/', produtosController.delete);
router.delete('/:id', produtosController.delete);

module.exports = router;
