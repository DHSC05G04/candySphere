const express = require('express');

const pedidosController = require('../../controllers/apis/pedidosControllers');

const router = express.Router();

router.get('/',pedidosController.index)

module.exports = router;