const express = require('express');

const tiposController = require('../../controllers/apis/tiposController');

const router = express.Router();

router.post('/', tiposController.create);
router.get('/', tiposController.index);
router.get('/:id', tiposController.index);
router.put('/', tiposController.update);
router.put('/:id', tiposController.update);
router.delete('/', tiposController.delete);
router.delete('/:id', tiposController.delete);

module.exports = router;