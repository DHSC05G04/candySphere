const express = require('express');
const multer = require('multer');
const path = require('path');

const adminController = require('../controllers/adminController');
const receitasController = require('../controllers/admin/receitasController');
const estoqueController = require('../controllers/admin/estoqueController');
const produtosController = require('../controllers/admin/produtosController');
const vendasController = require('../controllers/admin/vendasController');

const router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join('public', 'images', 'receitas'))
    },
    filename: function (req, file, cb) {

        cb(null, Date.now() + "." + file.originalname.split('.').pop())
    }
})
var upload = multer({
    storage: storage
})

/* GET admin page. */
router.get('/', adminController.index);

router.get('/produtos', produtosController.index);
router.get('/vendas', vendasController.index)

router.get('/estoque', estoqueController.index);
router.get('/estoque/:id', estoqueController.indexById);
router.put('/estoque/:id', upload.any(), estoqueController.update);

router.get('/receitas', receitasController.index);
router.get('/receitas/:id', receitasController.indexById);
router.put('/receitas/:id', upload.any(), receitasController.update);

module.exports = router;