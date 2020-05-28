const express = require('express');

const tiposController = require('../../controllers/apis/tiposController');

const router = express.Router();

router.post('/', tiposController.create);
router.get('/', tiposController.index);
router.get('/:id', tiposController.index);

module.exports = router;