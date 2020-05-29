const express = require('express');

const clientesController = require('../../controllers/apis/clientesController');

const router = express.Router();

router.get('/', clientesController.index);
router.get('/:id', clientesController.index);
router.post('/', clientesController.create);
router.put('/', clientesController.update);
router.put('/:id', clientesController.update);
router.delete('/', clientesController.delete);
router.delete('/:id', clientesController.delete);

module.exports = router;
