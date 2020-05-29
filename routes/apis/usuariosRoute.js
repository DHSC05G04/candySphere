const express = require('express');

const usuariosController = require('../../controllers/apis/usuariosController');

const router = express.Router();

router.get('/', usuariosControllers.index);
router.get('/:id', usuariosControllers.index);
router.post('/', usuariosControllers.create);
router.put('/', usuariosControllers.update);
router.put('/:id', usuariosControllers.update);
router.delete('/', usuariosControllers.delete);
router.delete('/:id', usuariosControllers.delete);

module.exports = router;
