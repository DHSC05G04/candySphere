const express = require('express');

const ingredientesController = require('../../controllers/apis/ingredientesController');

const router = express.Router();

router.get('/', ingredientesController.index);
router.get('/:id', ingredientesController.index);
router.post('/', ingredientesController.create);
router.put('/', ingredientesController.update);
router.put('/:id', ingredientesController.update);
router.delete('/', ingredientesController.delete);
router.delete('/:id', ingredientesController.delete);

module.exports = router;
