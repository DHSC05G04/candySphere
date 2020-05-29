const express = require('express');

const statusController = require('../../controllers/apis/statusController');

const router = express.Router();

router.get('/',statusController.index)
router.post('/',statusController.store)
router.put('/',statusController.update)
router.delete('/',statusController.delete)

module.exports = router;