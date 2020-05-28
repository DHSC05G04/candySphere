const express = require('express');

const statusController = require('../../controllers/apis/statusController');

const router = express.Router();

router.get('/',statusController.index)

module.exports = router;