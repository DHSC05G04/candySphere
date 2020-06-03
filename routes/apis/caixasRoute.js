const express = require('express');

const caixasController = require('../../controllers/apis/caixasController');

const router = express.Router();

router.get('/',caixasController.index)
router.post('/',caixasController.store)
router.put('/',caixasController.update)
router.delete('/',caixasController.delete)

module.exports = router;