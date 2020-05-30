const express = require('express');

const comandasController = require('../../controllers/apis/comandasController');

const router = express.Router();

router.get('/',comandasController.index)
router.post('/',comandasController.store)
router.put('/',comandasController.update)
router.delete('/',comandasController.delete)

module.exports = router;