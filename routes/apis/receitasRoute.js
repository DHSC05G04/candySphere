const express = require('express');

const receitasController = require('../../controllers/apis/receitasController');

const router = express.Router();

router.get('/', receitasController.index);
router.get('/:id', receitasController.index);
router.post('/', receitasController.create);
router.put('/', receitasController.update);
router.put('/:id', receitasController.update);
router.delete('/', receitasController.delete);
router.delete('/:id', receitasController.delete);

module.exports = router;
