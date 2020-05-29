const express = require('express');

const unidadesController = require('../../controllers/apis/unidadesController');

const router = express.Router();

router.get('/', unidadesController.index);
router.get('/:id', unidadesController.index);
router.post('/', unidadesController.create);
router.put('/', unidadesController.update);
router.put('/:id', unidadesController.update);
router.delete('/', unidadesController.delete);
router.delete('/:id', unidadesController.delete);

module.exports = router;
