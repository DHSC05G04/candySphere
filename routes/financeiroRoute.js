const express = require('express');

const financeiroController = require('../controllers/financeiroController');

const router = express.Router();

/* GET financeiro page. */
router.get('/', financeiroController.index);

module.exports = router;