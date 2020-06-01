const express = require('express');

const funcionariosControllers = require('../../controllers/apis/funcionarioControllers');

const router = express.Router();

router.get('/', funcionariosControllers.index);
router.get('/:id', funcionariosControllers.index);
router.post('/', funcionariosControllers.create);
router.put('/', funcionariosControllers.update);
router.put('/:id', funcionariosControllers.update);
router.delete('/', funcionariosControllers.delete);
router.delete('/:id', funcionariosControllers.delete);

module.exports = router;
