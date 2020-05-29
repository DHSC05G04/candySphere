const express = require('express');

const instrucoesController = require('../../controllers/apis/instrucoesController');

const router = express.Router();

router.get('/', instrucoesController.index);
router.get('/:id', instrucoesController.index);
router.post('/', instrucoesController.create);
router.put('/', instrucoesController.update);
router.put('/:id', instrucoesController.update);
router.delete('/', instrucoesController.delete);
router.delete('/:id', instrucoesController.delete);

module.exports = router;
