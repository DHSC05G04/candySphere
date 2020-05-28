const express = require('express');

const caixasController = require('../../controllers/apis/caixasController');

const router = express.Router();

router.get('/',caixasController.index)

module.exports = router;