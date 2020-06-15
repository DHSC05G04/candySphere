const express = require('express');

const UnidadesPorTipoController = require('../../controllers/apis/unidadesPorTipoController');

const router = express.Router();

router.get('/', UnidadesPorTipoController.index);
router.get('/:id', UnidadesPorTipoController.index);
router.post('/', UnidadesPorTipoController.create);
router.put('/', UnidadesPorTipoController.update);
router.put('/:id', UnidadesPorTipoController.update);
router.delete('/', UnidadesPorTipoController.delete);
router.delete('/:id', UnidadesPorTipoController.delete);

module.exports = router;
