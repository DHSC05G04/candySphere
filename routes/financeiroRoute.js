const express = require('express');
const isAuthenticated = require('../middlewares/isAuthenticated');

const financeiroController = require('../controllers/financeiroController');

const router = express.Router();

router.use(isAuthenticated)
/* GET financeiro page. */
router.get('/', financeiroController.index);
router.get('/vendas', financeiroController.vendas);
router.get('/receitas', financeiroController.receitas);

module.exports = router;
