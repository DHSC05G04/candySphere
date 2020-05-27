const express = require('express');

const estocaveisController = require('../../controllers/apis/estocaveisController');

const router = express.Router();

router.get('/', estocaveisController.index);
router.get('/:id', estocaveisController.index);
router.post('/', estocaveisController.store);
router.put('/:id', estocaveisController.update);
router.delete('/:id', estocaveisController.delete);

module.exports = router;