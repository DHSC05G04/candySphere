const express = require('express');
const isAuthenticated = require('../middlewares/isAuthenticated');

const financeiroController = require('../controllers/financeiroController');

const router = express.Router();

router.use(isAuthenticated)
/* GET financeiro page. */
router.get('/', financeiroController.index);
router.get('/relatorio', financeiroController.relatorio);

module.exports = router;