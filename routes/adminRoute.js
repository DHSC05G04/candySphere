const express = require('express');

const adminController = require('../controllers/adminController');

const router = express.Router();

/* GET admin page. */
router.get('/', adminController.index);

router.get('/produtos', adminController.indexProdutos);

router.get('/estoque', adminController.indexEstoque);

router.get('/receitas', adminController.indexReceitas);

module.exports = router;