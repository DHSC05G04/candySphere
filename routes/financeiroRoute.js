const express = require('express');

const financeiroController = require('../controllers/financeiroController');

const router = express.Router();

/* GET financeiro page. */
router.get('/', financeiroController.index);
router.get('/relatorio', financeiroController.relatorio);

module.exports = router;