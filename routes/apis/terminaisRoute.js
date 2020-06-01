const express = require('express');

const TerminaisController = require('../../controllers/apis/terminaisControllers');

const router = express.Router();

router.get('/',TerminaisController.index)
router.post('/',TerminaisController.store)
router.put('/',TerminaisController.update)
router.delete('/',TerminaisController.delete)

module.exports = router;