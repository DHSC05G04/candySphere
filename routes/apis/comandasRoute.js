const express = require('express');

const comandasController = require('../../controllers/apis/comandasController');

const router = express.Router();

router.get('/',comandasController.index)

module.exports = router;