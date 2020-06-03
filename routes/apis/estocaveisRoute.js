const express = require('express');

const estocaveisController = require('../../controllers/apis/estocaveisController');

const router = express.Router();

router.get('/', estocaveisController.index);
router.get('/:id', estocaveisController.index);
router.post('/', estocaveisController.create);
router.put('/', estocaveisController.update);
router.put('/:id', estocaveisController.update);
router.delete('/', estocaveisController.delete);
router.delete('/:id', estocaveisController.delete);

module.exports = router;