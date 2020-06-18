const express = require('express');

const authAPIController = require('../../controllers/apis/authAPIController');

const router = express.Router();

// router.get('/', funcionariosControllers.index);
// router.get('/:id', funcionariosControllers.index);
// router.post('/', funcionariosControllers.create);
// router.put('/', funcionariosControllers.update);
// router.put('/:id', funcionariosControllers.update);
// router.delete('/', funcionariosControllers.delete);
// router.delete('/:id', funcionariosControllers.delete);

router.post('/recovery',authAPIController.generateToken)

module.exports = router;