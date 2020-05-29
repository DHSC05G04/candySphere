const express = require('express');

const usuariosController = require('../../controllers/apis/usuariosController');

const router = express.Router();

router.get('/', usuariosController.index);
router.get('/:id', usuariosController.index);
router.post('/', usuariosController.create);
router.put('/', usuariosController.update);
router.put('/:id', usuariosController.update);
router.delete('/', usuariosController.delete);
router.delete('/:id', usuariosController.delete);

module.exports = router;
