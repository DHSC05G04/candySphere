const express = require('express');

const TerminaisController = require('../../controllers/apis/terminaisControllers');

const router = express.Router();

router.get('/',TerminaisController.index)

module.exports = router;